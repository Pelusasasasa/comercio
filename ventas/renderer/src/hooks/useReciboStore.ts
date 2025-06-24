import { useDispatch, useSelector } from "react-redux";
import { Recibo } from "../types/recibo";
import { addRecibo, deleteRecibo, savingRecibo, setReciboActive, setRecibos } from "../store/recibo/reciboSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    recibo: {
        recibos: Recibo[];
        reciboActive: Recibo | null;
        isSavingRecibo: boolean;
        messageErrorRecibo: string | null;
        totalPagado: number;
    }
}


export const useReciboStore = () => {
    const {recibos, reciboActive, isSavingRecibo, messageErrorRecibo, totalPagado } = useSelector((state: RootState) => state.recibo);
    const dispatch = useDispatch();

    const activeRecibo = (recibo: Recibo) => {
        dispatch(setReciboActive(recibo));
    }

    const startAgregarRecibo = async(recibo: Recibo) => {
        dispatch(savingRecibo());
        try{
            const { data } = await comercioApi.post('/recibo', recibo);
            if(data.ok){
                dispatch(addRecibo(data.recibo));
            }else{
                await Swal.fire('No se pudo agregar el recibo', data.msg, 'error');
            };
        }catch(error){
            console.log(error?.response)
            await Swal.fire('No se pudo agregar el recibo', error?.response?.data?.msg, 'error');
        }
    };

    const startEliminarRecibo = async(id: string) => {
        dispatch(savingRecibo());

        try {
            const { data } = await comercioApi.delete(`recibo/${id}`)

            if(data.ok){
                dispatch(deleteRecibo(id));
            }else{
                await Swal.fire('No se pudo eliminar el recibo', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar el recibo', error.response.data?.msg, 'error')
        }
    };

    const startModiifcarRecibo = async(recibo: Recibo) => {
        dispatch(savingRecibo());
        try {
            const { data } = await comercioApi.put(`recibo/${recibo._id}`, recibo);

            if(data.ok){
                dispatch(addRecibo(data.recibo));
            }else{
                await Swal.fire('No se pudo modificar el recibo', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar el recibo', error.response.data?.msg, 'error')
        }
    };

    const startTraerRecibos = async() => {
        dispatch(savingRecibo());
        try {
            const { data } = await comercioApi.get('recibo');

            if(data.ok){
                dispatch(setRecibos(data.recibos));
            }else{
                await Swal.fire('No se pudo obtener los recibos', data.msg, 'error');
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los recibos', error.response.data?.msg, 'error');
        }
    }


    return {
        //Atributos
        recibos,
        reciboActive, 
        isSavingRecibo, 
        messageErrorRecibo,
        totalPagado,

        //Metodos
        activeRecibo,
        startAgregarRecibo,
        startEliminarRecibo,
        startModiifcarRecibo,
        startTraerRecibos
    }

};