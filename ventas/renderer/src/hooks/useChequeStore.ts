import Swal from "sweetalert2";
import { Cheque } from "../types/cheque"
import comercioApi from "../api/comercioApi";

export const useChequeStore = () => {

  const startAgregarCheque = async(cheque) => {
    const {codigoCliente, ...resto} = cheque;

    const nuevoCheque: Cheque = {
      ...resto,
      entregadoPor: codigoCliente.nombre
    }
    try {
      const { data } = await comercioApi.post('cheque', nuevoCheque);
      if(data.ok){
        await Swal.fire('Cheque agregado', '', 'success');
        return {
          ok: true
        }
      }else{
        await Swal.fire('Error al cargar el cheque', data.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      await Swal.fire('Error al cargar el cheque', error.response?.data?.msg, 'error');
    }
  };

  return {

    //Metodos
    startAgregarCheque
  }
}
