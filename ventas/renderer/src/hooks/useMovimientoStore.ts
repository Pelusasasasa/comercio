import { useDispatch, useSelector } from "react-redux"
import { Movimiento } from "../types/movimiento"
import { addMovimiento, deleteMovimiento, savingMovimiento, setActiveMovimiento, setMovimientos, updateMovimiento } from "../store/movimiento/movimientosSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    movimiento: {
        movimientos: Movimiento[];
        movimientoActive: Movimiento | null;
        isSavingMovimiento: boolean;
        messageErrorMovimiento: string | null;
    }
}

export const useMovimientoStore = () => {
    const { movimientoActive, movimientos, isSavingMovimiento, messageErrorMovimiento } = useSelector((state: RootState) => state.movimiento)
    const dispatch = useDispatch();

    const activeMovimiento = (id: string) => {
        dispatch(setActiveMovimiento(id));
    };

    const startAgregarMovimento = async(movimiento: Movimiento) => {
        dispatch(savingMovimiento());

        try {
            const { data } = await comercioApi.post('movimientoStock', movimiento);

            if(data.ok){
                dispatch(addMovimiento(data.movimiento));
            }else{
                await Swal.fire('Error al agregar el movimiento', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar el movimiento', error.response.data?.msg, 'error');
        }
    };

    const startEliminarMovimiento = async(id: string) => {
        dispatch(savingMovimiento());

        try {
            const { data } = await comercioApi.delete(`movimientoStock/${id}`);

            if(data.ok){
                dispatch(deleteMovimiento(id));
            }else{
                await Swal.fire('Error al eliminar el movimiento', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar el movimiento', error.response.data?.msg, 'error');
        }
    };

    const startModificarMovimiento = async(movimiento: Movimiento) => {
        dispatch(savingMovimiento());

        try {
            const { data } = await comercioApi.put(`movimientoStock/${movimiento._id}`, movimiento);

            if(data.ok){
                dispatch(updateMovimiento(movimiento));
            }else{
                await Swal.fire('Error al modificar el movimiento', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar el movimiento', error.response.data?.msg, 'error');
        }
    };

    const traerMovimientos = async() => {
        dispatch(savingMovimiento());

        try {
            const { data } = await comercioApi.get('movimientoStock');

            if(data.ok){
                dispatch(setMovimientos(data.movimientos));
            }else{
                await Swal.fire('Error al cargar los movimientos', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar los movimientos', error.response.data?.msg, 'error');
        }
   
    };

    const traerMovimientosPorProducto = async(idProducto: string) => {
        dispatch(savingMovimiento());

        try {
            const { data } = await comercioApi.get(`movimientoStock/producto/${idProducto}`);

            if(data.ok){
                dispatch(setMovimientos(data.movimientos));
            }else{
                await Swal.fire('Error al cargar los movimientos', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar los movimientos', error.response.data?.msg, 'error');
        }

    };

    return {
        //Atributos
        movimientoActive,
        movimientos,
        isSavingMovimiento,
        messageErrorMovimiento,

        //Metodos
        activeMovimiento,
        startAgregarMovimento,
        startEliminarMovimiento,
        startModificarMovimiento,
        traerMovimientos,
        traerMovimientosPorProducto

    }
}