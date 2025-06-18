import { useDispatch, useSelector } from "react-redux";
import { Provedor } from "../types/provedor";
import comercioApi from "../api/comercioApi";
import { setProvedores } from "../store/provedor/provedorSlice";
import Swal from "sweetalert2";

interface RootState {
    provedor: {
        provedores: Provedor[],
        isSavingProvedor: boolean
    }
}

export const useProvedorStore = () => {
    
    const { provedores, isSavingProvedor } = useSelector((state: RootState) => state.provedor)
    const dispatch = useDispatch();


    const startTraerProvedores = async() => {
        try {
            const { data } = await comercioApi.get('provedor');

            if(data.ok){
                dispatch(setProvedores(data.provedores))
            }else{
                await Swal.fire('No se pudo obtener los provedores', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los provedores', error.response.data?.msg, 'error')
        }

    }

    return {
        //atributos
        provedores,
        isSavingProvedor,

        //metodos
        startTraerProvedores,
    }
    
};