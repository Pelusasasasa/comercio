import { useDispatch, useSelector } from "react-redux"
import comercioApi from "../api/comercioApi";
import { activeType, clearListado, setListados } from "../store/listado/listadoSlice";
import Swal from "sweetalert2";

export const useListadoStore = () => {

    const { listado, type } = useSelector((state: any) => state.listado);
    const dispatch = useDispatch();

    const startActivarTipo = async(text: string) => {
        dispatch(activeType(text))
    };

    const startTraerListado = async(type: string, desde: string, hasta: string) => {
        if(desde && hasta){
            if(type === 'presupuesto'){
                try {
                    const { data } = await comercioApi.get(`presupuesto/porFecha/${desde}/${hasta}`);
                    if(data.ok){
                        dispatch(setListados(data.presupuestos))
                    }else{
                        await Swal.fire('No se pudo obtener los presupuestos', data.msg, 'error');
                    }
                } catch (error) {
                    console.log(error);
                    await Swal.fire('No se pudo obtener los presupuestos', error.response?.data?.msg, 'error');
                }
            }else if(type === 'CONTADO'){
                try {
                    const { data } = await comercioApi.get(`venta/forTypeAndFecha/${type}/${desde}/${hasta}`);
                    if(data.ok){
                        dispatch(setListados(data.ventas));
                    }else{
                        await Swal.fire('No se pudo obtener las ventas', data.msg, 'error');
                    }
                } catch (error) {
                    console.log(error);
                    await Swal.fire('No se pudo obtener las ventas', error.response?.data?.msg, 'error');
                }
            }
        }

    };

    const limpiarStore = async() => {
        dispatch(clearListado());
    };

  return {
    //Atributos
    type,
    listado,

    //Metodos
    startActivarTipo,
    startTraerListado,
    limpiarStore

  }
}
