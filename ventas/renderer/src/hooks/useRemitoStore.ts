import { useDispatch, useSelector } from "react-redux";

import comercioApi from "../api/comercioApi";

import { addRemito, addRemitosCTACTE, deleteRemito, finishSavingRemito, savingRemito, setActiveRemito, setRemitos, updateRemito } from "../store/remito/remitoSlice";
import { Remito, RemitoFormState } from "../types/remito";

import Swal from "sweetalert2";

interface RootState {
    remito: {
        remitos: Remito[];
        remitoActive: Remito | null;
        isSavingRemito: boolean;
        messageErrorRemito: string | null;
        remitosParaCuentaCorriente: Remito[]
    }
}

export const useRemitoStore = () => {
    const {remitoActive, remitos, isSavingRemito, messageErrorRemito, remitosParaCuentaCorriente } = useSelector((state: RootState) => state.remito);
    const dispatch = useDispatch();
    
    const activeRemito = (id: string) => {
        dispatch(setActiveRemito(id))
    };

    const startAgregarRemito = async(remito: RemitoFormState) => {
        dispatch(savingRemito());

        try {
            const { data } = await comercioApi.post('/remito', remito);

            if(data.ok){
                dispatch(addRemito(data.remito));
                return data.remito;
            }else{
                await Swal.fire('No se pudo cargar el remito', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo cargar el remito', error?.response?.data?.msg, 'error');
        } finally{
            dispatch(finishSavingRemito())
        }
    };

    const startBorrarRemito = async(id: string) => {
        dispatch(savingRemito());

        try {
            const { data } = await comercioApi.delete(`remito/${id}`);

            if(data.ok){
                dispatch(deleteRemito(id));
            }else{
                await Swal.fire('No se pudo eliminar el remito', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar el remito', error?.response?.data?.msg, 'error');
        } finally{
            dispatch(finishSavingRemito())
        }
    };

    const startModificarRemito = async(remito: Remito) => {
        dispatch(savingRemito());

        try {
            const { data } = await comercioApi.put(`remito/${remito._id}`, remito);

            if(data.ok){
                dispatch(updateRemito(data.remito));
            }else{
                await Swal.fire('No se pudo modificar el remito', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar el remito', error?.response?.data?.msg, 'error');
        } finally{
            dispatch(finishSavingRemito());
        }
    };

    const startTraerRemitosAtivos = async() => {
        dispatch(savingRemito())
        try {
            const { data } = await comercioApi.get('/remito/remitoActivo');

            if(data.ok){
                dispatch(setRemitos(data.remitos))
            }else{
                await Swal.fire('No se pudo obtener los remitos activos', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los remitos activos', error?.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingRemito());
        }
    };

    const startTraerRemitosNoActivos = async() => {
        dispatch(savingRemito());
        try {
            const { data } = await comercioApi.get('/remito/remitoNoActivo');
            if(data.ok){
                dispatch(setRemitos(data.remitos));
            }else{
                await Swal.fire('No se pudo obtener los remitos no activos', data.msg, 'error');
            }
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo obtener los remitos no activos', error?.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingRemito())
        }
    };

    const startAgregarRemitoParaCTACTE = async(id: string) => {
        dispatch(savingRemito());

        dispatch(addRemitosCTACTE(id))
    };

    return {
        //Atributos
        remitos,
        remitoActive,
        isSavingRemito,
        messageErrorRemito,
        remitosParaCuentaCorriente,

        //Metodos
        activeRemito,
        startAgregarRemito,
        startBorrarRemito,
        startModificarRemito,
        startTraerRemitosAtivos,
        startTraerRemitosNoActivos,
        startAgregarRemitoParaCTACTE
    };
};