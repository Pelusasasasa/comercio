import { useDispatch, useSelector } from "react-redux";
import { Venta } from "../types/venta";
import { addVenta, deleteVenta, finishSavingVenta, savingVenta, setActiveVenta, setVentas, updateVenta } from "../store/venta/ventaSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    venta: {
        ventas: Venta[],
        ventaActive: Venta | null,
        isSavingVenta: boolean,
        messageErrorVenta: string | null
    }
}

export const useVentaStore = () => {

    const { isSavingVenta, ventas, messageErrorVenta, ventaActive} = useSelector((state: RootState) => state.venta);
    const dispatch = useDispatch();

    const startAgregarVenta = async(venta: Venta) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.post('venta', venta);

            if(data.ok){
                dispatch(addVenta(data.venta));
            }else{
                await Swal.fire('No se pudo cargar la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo cargar la venta', error.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingVenta())
        }
    };

    const startBorrarVenta = async(id: string) => {

        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.delete(`venta/${id}`)

            if(data.ok){
                dispatch(deleteVenta(id));
            }else{
                await Swal.fire('No se pudo eliminar la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la venta', error.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingVenta())
        };
    };

    const startModificarVenta = async(venta: Venta) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.put(`venta/${venta._id}`, venta);
            if(data.ok){
                dispatch(updateVenta(venta));
            }else{
                await Swal.fire('No se pudo modificar la venta',  data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la venta', error.response?.data?.msg, 'error');
        }
    };

    const startTraerVentaPorId = async(id: string) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi(`venta/${id}`);
            if(data.ok){
                dispatch(setActiveVenta(data.venta._id));
            }else{
                await Swal.fire('No se puede obtener la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se puede obtener la venta', error.response?.data?.msg)
        }finally{
            dispatch(finishSavingVenta())
        }
    };
    
    const startTraerVentas = async(id: string) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi(`venta`);
            if(data.ok){
                dispatch(setVentas(data.ventas));
            }else{
                await Swal.fire('No se puede obtener las ventas', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se puede obtener las ventas', error.response?.data?.msg)
        }finally{
            dispatch(finishSavingVenta())
        }
    };

    return {
        //Atributos
        ventaActive,
        ventas,
        isSavingVenta,
        messageErrorVenta,

        //Metodos
        startAgregarVenta,
        startBorrarVenta,
        startModificarVenta,
        startTraerVentaPorId,
        startTraerVentas
    }
}