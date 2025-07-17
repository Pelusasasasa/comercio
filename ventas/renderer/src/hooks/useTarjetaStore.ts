import Swal from "sweetalert2"
import { Tarjeta } from "../types/tarjeta"
import comercioApi from "../api/comercioApi"

export const useTarjetaStore = () => {

    const startAgregarTarjeta = async(tarjeta) => {
        const {codigoCliente, ...resto} = tarjeta;

        const nuevaTarjeta: Tarjeta = {
            ...resto,
            cliente: codigoCliente.nombre
        }
        try {
            const { data } = await comercioApi.post('tarjeta', nuevaTarjeta);

            if(data.ok){
                await Swal.fire('Tarjeta Agregada', `Se agrego la tarjeta con el importe ${data.tarjeta.importe}`, 'success')
                return {
                    ok: true
                }
            }else{
                await Swal.fire('No se pudo agregar la tarjeta', data.msg, 'error');
            };
        } catch (error) {
            console.log(error)
            await Swal.fire('No se pudo agregar la tarjeta', error.response.msg?.data, 'error');
        }
    }

    return {
        //Metodos
        startAgregarTarjeta
    }
}
