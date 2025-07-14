import { useDispatch, useSelector } from "react-redux";
import { Historica } from "../types/historica";
import { addHistorica, deleteHistorica, savingHistorica, setActiveHistorica, setHistoricas, updateHistorica } from "../store/historica/historicaSlice";
import { saving } from "../store/cliente/clienteSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    historica: {
        historicaActive: Historica | null;
        historicas: Historica[];
        isSavingHistorica: boolean;
        messageErrorHistorica: string | null;
    }
}

export const useHistoricaStore = () => {
    const { historicaActive, historicas, isSavingHistorica, messageErrorHistorica } = useSelector((state: RootState) => state.historica);
    const dispatch = useDispatch();

    const activeHistorica = (id: string) => {
        dispatch(setActiveHistorica(id));
    };

    const startAgregarHistorica = async (historica: Historica) => {
        dispatch(savingHistorica());
        
        try {
            const { data } = await comercioApi.post('cuentaHistorica', historica);

            if (data.ok) {
                dispatch(addHistorica(data.historica));
            } else {
                await Swal.fire('No se pudo cargar la historica', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo cargar la historica', error.response.data?.msg, 'error');
            
        }

    };

    const startEliminarHistorica = async (id: string) => {
        dispatch(savingHistorica());
        
        try {
            const { data } = await comercioApi.delete(`cuentaHistorica/${id}`);

            if (data.ok) {
                dispatch(deleteHistorica(data.historica));
            } else {
                await Swal.fire('No se pudo eliminar la historica', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la historica', error.response.data?.msg, 'error');
        }
    };

    const startUpdateHistorica = async (historica: Historica) => {
        dispatch(savingHistorica());
        try {
            const { data } = await comercioApi.put(`cuentaHistorica/${historica._id}`, historica);

            if (data.ok) {
                dispatch(updateHistorica(data.historica));
            } else {
                await Swal.fire('No se pudo actualizar la historica', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo actualizar la historica', error.response.data?.msg, 'error');
        }
   
    };

    const startSetHistoricas = async (idCliente: string) => {
        dispatch(savingHistorica());

        try {
            const { data } = await comercioApi.get(`cuentaHistorica/cliente/${idCliente}`);
            if (data.ok) {
                dispatch(setHistoricas(data.historicas));
            } else {
                await Swal.fire('No se pudieron cargar las historicas', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudieron cargar las historicas', error.response.data?.msg, 'error');
        }
    };

    

    return {
        //Atributos
        historicaActive,
        historicas,
        isSavingHistorica,
        messageErrorHistorica,

        //Metodos
        activeHistorica,
        startAgregarHistorica,
        startEliminarHistorica,
        startUpdateHistorica,
        startSetHistoricas
    }

};