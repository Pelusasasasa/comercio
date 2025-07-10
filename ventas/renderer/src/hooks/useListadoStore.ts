import { useDispatch, useSelector } from "react-redux"
import comercioApi from "../api/comercioApi";
import { setListados } from "../store/listado/listadoSlice";
import Swal from "sweetalert2";

export const useListadoStore = () => {

    const { listado } = useSelector((state: any) => state.listado);
    const dispatch = useDispatch();

    
    const startTraerListado = async(type: string, desde: string, hasta: string) => {
        if(type === 'presupuesto'){
            try {
                const { data } = await comercioApi.get(`presupuesto/porFecha/${desde}/${hasta}`);
                console.log(data)
                if(data.ok){
                    dispatch(setListados(data.presupuestos))
                }else{
                    await Swal.fire('No se pudo obtener los presupuestos', data.msg, 'error');
                }
            } catch (error) {
                console.log(error);
                await Swal.fire('No se pudo obtener los presupuestos', error.response?.data?.msg, 'error');
            }
        }

    };

  return {
    //Atributos
    listado,

    //Metodos
    startTraerListado

  }
}
