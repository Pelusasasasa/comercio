import { useDispatch, useSelector } from "react-redux"
import { Numero } from "../types/numero"
import { addNumero, deleteNumero, savingNumero, setActiveNumero, setNumeros, updateNumero } from "../store/numero/numeroSlice";
import comercioApi from "../api/comercioApi";
import Swal from "sweetalert2";

interface RootState {
    numero: {
        numeros: Numero[];
        numeroActive: Numero | null;
        isSavingNumero: boolean;
        messageErrorNumero: string | null;
    }
}

export const useNumeroStore = () => {
    const {numeroActive, numeros, isSavingNumero, messageErrorNumero} = useSelector((state: RootState) => state.numero)
    const dispatch = useDispatch();

    const activeNumero = (id: string) => {
        dispatch(setActiveNumero(id))
    };

    const startAgregarNumero = async(numero: Numero) => {
        dispatch(savingNumero());

        try {
            const { data } = await comercioApi.post('numero', numero);

            if(data.ok){
                dispatch(addNumero(data.numero));
            }else{
                await Swal.fire('No se pudo cargar el numero', data.msg, 'error')
            }
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo cargar el numero', error?.response?.data?.msg, 'error')
            
        }
    };

    const startEliminarNumero = async(id: string) => {
        dispatch(savingNumero());

        try {
            const { data } = await comercioApi.delete(`numero/${id}`);

            if(data.ok){
                dispatch(deleteNumero(data.numero._id))
            }else{
                await Swal.fire('No se pudo eliminar el numero', data.msg, 'error')
            }
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo eliminar el numero', error?.response?.data?.msg, 'error');
        };
    };

    const startModificarNumero = async(numero: Numero) => {
        dispatch(savingNumero());

        try {
            const { data } = await comercioApi.put(`numero/${numero._id}`, numero);

            if(data.ok){
                dispatch(updateNumero(data.numero));
            }else{
                await Swal.fire('No se pudo modificar el numero', data.msg, 'error');
            }
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo modificar el numero', error?.response?.data?.msg, 'error');
        }
    };

    const startTraerNumeros = async() => {
        dispatch(savingNumero());
        try {
            const { data } = await comercioApi.get('numero');
            if(data.ok){
                dispatch(setNumeros(data.numeros))
            }else{
                await Swal.fire('No se pudo obtener los numeros', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los numeros', error?.response?.data?.msg, 'error');
        }
    }

    return {
        //Atributos
        numeroActive,
        numeros,
        isSavingNumero,
        messageErrorNumero,

        //Metodos
        activeNumero,
        startAgregarNumero,
        startEliminarNumero,
        startModificarNumero,
        startTraerNumeros,
    }
}