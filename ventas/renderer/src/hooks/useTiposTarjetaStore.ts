import { useDispatch, useSelector } from "react-redux"
import { TipoTarjeta } from "../types/tipoTarjeta";
import { isLoading, setTiposTarjetas } from "../store/tipoTarjeta/tipoTarjetaSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    tipoTarjeta: {
        tipos: TipoTarjeta[];
        loading: boolean;
        messageErrorTipoTarjeta: string | null
    }
}

export const useTiposTarjetaStore = () => {
    const {tipos, messageErrorTipoTarjeta, loading} = useSelector((state: RootState) => state.tipoTarjeta);
    const dispatch = useDispatch();


    const startTraerTiposTarjetas = async() => {
        dispatch(isLoading());

        try {
            const { data } = await comercioApi.get(`tipoTarjeta`);
            if(data.ok){
                dispatch(setTiposTarjetas(data.tipoTarjeta));
            }else{
                await Swal.fire('Error al traer los tipos de tarjeta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al traer los tipos de tarjetas', error.response?.data?.msg, 'error');
        }
    };

  return {
    //Atributos
    tipos,
    messageErrorTipoTarjeta,
    loading,

    ///Metodos
    startTraerTiposTarjetas
  }
}
