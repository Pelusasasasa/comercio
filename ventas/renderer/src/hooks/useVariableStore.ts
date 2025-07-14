import { useDispatch, useSelector } from "react-redux"
import { Variable } from "../types/variable";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";
import { finishLoading, setLoading, setVariableActive, setVariables } from "../store/variable/variableSlice";

interface RootState {
    variable: {
        variables: Variable[];
        variableActive: Variable | null;
        isSavingVariable: boolean;
        messageErrorVariable: string | null;
    }
}


export const useVariableStore = () => {
    const { variableActive, variables, isSavingVariable, messageErrorVariable } = useSelector((state: RootState) => state.variable);
    const dispatch = useDispatch();

    const startTraerVariables = async() => {
        try {
            const { data } = await comercioApi.get('variable');

            if(data.ok){
                dispatch(setVariables(data.variables));
            }else{
                await Swal.fire('Error al cargar las variables', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar las variables', error.response?.data?.msg || 'Error desconocido', 'error');
        }
    };

    const startTraerDolar = async() => {
        dispatch(setLoading());
        try {
            const { data } = await comercioApi.get('variable/clave/DOLAR');

            if(data.ok){
                dispatch(setVariableActive(data.variable));
            }else{
                await Swal.fire('Error al cargar el valor del Dólar', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('Error al cargar el valor del Dólar', error.response?.data?.msg || 'Error desconocido', 'error');
        }
        finally{
            dispatch(finishLoading())
        }
    };

  return {
    //Atributos
    isSavingVariable,
    messageErrorVariable,
    variableActive,
    variables,

    //Métodos
    startTraerVariables,
    startTraerDolar,
    
  }
}
