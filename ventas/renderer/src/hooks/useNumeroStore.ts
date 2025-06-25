import { useDispatch, useSelector } from "react-redux"
import { Numero } from "../types/numero"
import { addNumero, savingNumero } from "../store/numero/numeroSlice";
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

    return {
        //Atributos
        numeroActive,
        numeros,
        isSavingNumero,
        messageErrorNumero

        //Metodos
    }
}