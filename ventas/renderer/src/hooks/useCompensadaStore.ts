import { useDispatch, useSelector } from "react-redux"
import { Compensada } from "../types/compensada";
import { addCompensada, deleteCompensada, savingCompensada, setActiveCompensada, setCompensadas, updateCompensada } from "../store/compensada/compensadaSlice";
import comercioApi from "../api/comercioApi";
import Swal from "sweetalert2";

interface RootState{
    compensada: {
        compensadas: Compensada[];
        compensadaActive: Compensada | null;
        isSavingCompensada: boolean;
        messageErrorCompensada: string | null;
    }
}

export const useCompensadaStore = () => {
    const {compensadaActive, compensadas, isSavingCompensada, messageErrorCompensada} = useSelector((state: RootState) => state.compensada);
    const dispatch = useDispatch();

    const activeCompensada = (id: string) => {
        dispatch(setActiveCompensada(id));
    };

    const startAgregarCompensada = async(compensada: Compensada) => {
        dispatch(savingCompensada());

        try {
            const { data } = await comercioApi.post('cuentaCompensada', compensada);

            if(data.ok){
                dispatch(addCompensada(data.compensada));
            }else{
                await Swal.fire('No se pudo agregar la compensada', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo agregar la compensada', error.response.data?.msg, 'error')
        }
    };

    const startEliminarCompensada = async(id: string) => {
        dispatch(savingCompensada());

        try {
            const { data } = await comercioApi.delete(`cuentaCompensada/${id}`);

            if(data.ok){
                dispatch(deleteCompensada(id));
            }else{
                await Swal.fire('No se pudo eliminar la compensada', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la compensada', error.response.data?.msg, 'error')
        }
    };

    const startModificarCompensada = async(compensada: Compensada) => {
        dispatch(savingCompensada());

        try {
            const { data } = await comercioApi.put(`cuentaCompensada/${compensada._id}`, compensada);

            if(data.ok){
                    dispatch(updateCompensada(data.compensada));
            }else{
                await Swal.fire('No se pudo modificar la compensada', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la compensada', error.response.data?.msg, 'error')
        }
    };

    const startTraerCuentaPorCliente = async(id: string | '') => {
        dispatch(savingCompensada());

        try {
            const { data } = await comercioApi.get(`cuentaCompensada/cliente/${id}`);
            console.log(data);
            if(data.ok){
                dispatch(setCompensadas(data.cuentas));
            }else{
                await Swal.fire('No se pudo obtener las compensadas', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener las compensadas', error.response.data?.msg, 'error')
        }
    };

    const startActualizarCompensada = async(id: string) => {
        dispatch(savingCompensada());

        try {
            const { data } = await comercioApi.post(`cuentaCompensada/${id}`);
            console.log(data);
            if(data.ok){
                dispatch(updateCompensada(data.cuenta));
            }else{
                await Swal.fire('No se pudo actualizar la compensada', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo actualizar la compensada', error.response.data?.msg, 'error')
        }
    };

    return {
        //Atributos
        compensadaActive,
        compensadas,
        isSavingCompensada,
        messageErrorCompensada,

        //Metodos
        activeCompensada,
        startActualizarCompensada,
        startAgregarCompensada,
        startEliminarCompensada,
        startModificarCompensada,
        startTraerCuentaPorCliente
        
    }
}