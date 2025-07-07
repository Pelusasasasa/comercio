import { useDispatch, useSelector } from "react-redux"
import { Presupuesto } from "../types/presupuesto"
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";
import { deletePresupuesto, setPresupuestoActive, setPresupuestos, updatePresupuesto } from "../store/presupuesto/presupuestoSlice";

interface RootState {
    presupuesto: {
        presupuestos: Presupuesto[];
        presupuestoActive: Presupuesto | null;
        isLoading: boolean;
        isSaving: boolean;
        messageError: string | null
    }
}

export const usePresupuestoStore = () => {
    const {messageError, isLoading, isSaving, presupuestoActive, presupuestos} = useSelector((state: RootState) => state.presupuesto);
    const dispatch = useDispatch();

    const activarPresupuesto = async(id: string) => {
        try {
            const { data } = await comercioApi(`presupuesto/${id}`);

            if(data.ok){
                dispatch(setPresupuestoActive(data.presupuesto))
            }else{
                await Swal.fire('No se pudo Obtener el presupuesto', data?.msg, 'error');    
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo Obtener el presupuesto', error.response?.data?.msg, 'error');
        }
    };

    const startAgregarPresupuesto = async(presupuesto: Presupuesto) => {
        try {
            const { data } = await comercioApi.post('presupuesto', presupuesto);

            if(data.ok){
                dispatch(data.presupuesto)
            }else{
                await Swal.fire('No se pudo Agregar el presupuesto', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo Agregar el presupuesto', error.response?.data?.msg, 'error');
        }
    };

    const startBorrarPresupuesto = async(id: string) => {
        try {
            const { data } = await comercioApi.delete(`presupuesto/${id}`);

            if(data.ok){
                dispatch(deletePresupuesto(data.presupuesto._id))
            }else{
                await Swal.fire('No se pudo borrar el presupuesto', data.msg, 'error');    
            }
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo borrar el presupuesto', error.response?.data?.msg, 'error');
        }
    };

    const startModificarPresupuesto = async(presupuesto: Presupuesto) => {
        try {
            const { data } = await comercioApi.put(`presupuesto/${presupuesto._id}`, presupuesto);
            if(data.ok){
                dispatch(updatePresupuesto(data.presupuesto))
            }else{
                await Swal.fire('No se pudo modificar el presupuesto', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modifcar el presupuesto', error.response?.data?.msg, 'error');
        }
    };

    const startTraerPorFecha = async(desde: string, hasta: string) => {
        try {
            const { data } = await comercioApi.get(`presupuesto/porFecha/${desde}/${hasta}`);

            if(data.ok){
                dispatch(setPresupuestos(data.presupuestos))
            }else{
                await Swal.fire('No se pudo modificar el presupuesto', data?.msg, 'error');    
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar el presupuesto', error.response?.data?.msg, 'error');
        }
    };

  return {
    //Atributos
    isLoading,
    isSaving,
    messageError,
    presupuestoActive,
    presupuestos,

    //Metodos
    activarPresupuesto,
    startAgregarPresupuesto,
    startBorrarPresupuesto,
    startModificarPresupuesto,
    startTraerPorFecha,
  }
}
