import { useDispatch, useSelector } from "react-redux"
import { UnidadMedida } from "../types/unidadMedida"
import { addUnidadMedida, deleteUnidadMedida, savingUnidadMedida, setActiveUnidadMedida, setUnidadMedidas } from "../store/unidadMedida/unidadMedidaSlice";
import comercioApi from "../api/comercioApi";
import Swal from "sweetalert2";

interface RootState {
    unidadMedida: {
        unidadMedidas: UnidadMedida[];
        unidadMedidaActive: UnidadMedida | null;
        isSavingUnidadMedida: boolean;
        messageErrorUnidadMedida: string | null;
    }
}

export const useUnidadMedidaStore = () => {
    const { unidadMedidas, unidadMedidaActive, isSavingUnidadMedida, messageErrorUnidadMedida } = useSelector((state: RootState) => state.unidadMedida)
    const dispatch = useDispatch();

    const activarUnidadMedida = (id: string) => {
        dispatch(setActiveUnidadMedida(id))
    };

    const startAgregarUnidadMedida = async(unidadMedida: UnidadMedida) => {
        dispatch(savingUnidadMedida());

        try {
            const { data } = await comercioApi.post('unidadMedida', unidadMedida);

            if(data.ok){
                dispatch(addUnidadMedida(data.unidadMedida));
            }else{
                await Swal.fire('No se pudo agregar la unidad de medida', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo agregar la unidad de medida', error.response.data?.msg, 'error');
        }
    };

    const startEliminarUnidadMedida = async(id: string) => {
        dispatch(deleteUnidadMedida(id));
        try {
            const { data } = await comercioApi.delete(`unidadMedida/${id}`);
            if(data.ok){
                dispatch(deleteUnidadMedida(id));
            }else{
                await Swal.fire('No se pudo eliminar la unidad de medida', data.msg, 'error');
            };
            
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la unidad de medida', error.response.data?.msg, 'error');
        }
    };

    const startModifcarUnidadMedida = async(unidadMedida: UnidadMedida) => {
        dispatch(savingUnidadMedida());

        try {
            const { data } = await comercioApi.put(`unidadMedida/${unidadMedida._id}`, unidadMedida);

            if(data.ok){
                dispatch(setActiveUnidadMedida(data.unidadMedida));
            }else{
                await Swal.fire('No se pudo modificar la unidad de medida', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la unidad de medida', error.response.data?.msg, 'error')
        }
    };

    const startTraerUnidadMedidas = async() => {
        dispatch(savingUnidadMedida());
        try {
            const { data } = await comercioApi.get('unidadMedida');
            if(data.ok){
                dispatch(setUnidadMedidas(data.unidadesMedida));
            }else{
                await Swal.fire('No se pudo obtener las unidades de medida', data.msg, 'error');
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener las unidades de medida', error.response.data?.msg, 'error');
        }
    };


    return { 
        //Atributos
        unidadMedidaActive,
        unidadMedidas,
        messageErrorUnidadMedida,
        isSavingUnidadMedida,

        //Metodos
        activarUnidadMedida,
        startAgregarUnidadMedida,
        startEliminarUnidadMedida,
        startModifcarUnidadMedida,
        startTraerUnidadMedidas
    }
}