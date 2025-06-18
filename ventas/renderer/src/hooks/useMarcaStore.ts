import { useDispatch, useSelector } from "react-redux"
import { Marca } from "../types/marca";
import { addMarca, deleteMarca, savingMarca, setActiveMarca, setMarcas, updateMarca } from "../store/marca/marcaSlice";
import comercioApi from "../api/comercioApi";
import Swal from "sweetalert2";

interface RootState {
    marca: {
        marcas: Marca[];
        marcaActive: Marca | null;
        isSavingMarca: boolean;
        messageErrorMarca: string | null
    }
}

export const useMarcaStore = () => {
    const { marcas, marcaActive, isSavingMarca, messageErrorMarca } = useSelector((state: RootState) => state.marca);
    const dispatch = useDispatch();

    const activarMarca = (id: string) => {
        dispatch(setActiveMarca(id))
    };

    const startAgregarMarca = async(marca: Marca) => {
        dispatch(savingMarca());

        try {
            const { data } = await comercioApi.post('marca', marca);

            if(data.ok){
                dispatch(addMarca(data.marca));
            }else{
                await Swal.fire('No se pudo cargar la marca', data.msg, 'error')
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo cargar la marca', error.response.data?.msg, 'error')
            
        }
    };

    const startModificarMarca = async(marca: Marca) => {

        dispatch(savingMarca())

        try {
            const { data } = await comercioApi.put(`marca/${marca._id}`, marca);

            if(data.ok){
                dispatch(updateMarca(data.marca));
            }else{
                await Swal.fire('No se pudo modificar la marca', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la marca', error.response.data?.msg, 'error')
        }
    };

    const startEliminarMarca = async(id: string) => {
        dispatch(savingMarca());

        try {
            const { data } = await comercioApi.delete(`marca/${id}`)

            if(data.ok){
                dispatch(deleteMarca(id));
            }else{
                await Swal.fire('No se pudo eliminar la marca', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la marca', error.response.data?.msg, 'error')
        }
    };

    const startTraerMarcas = async() =>{
        dispatch(savingMarca())
        try {
            const { data } = await comercioApi.get('marca');

            if(data.ok){
                dispatch(setMarcas(data.marcas));
            }else{
                await Swal.fire('No se pudo obtener las marcas', data.msg, 'error');
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener las marcas', error.response.data?.msg, 'error');
        }
    };

    return {
        //atributos
        marcas,
        marcaActive,
        isSavingMarca,
        messageErrorMarca,

        //metodos
        activarMarca,
        startAgregarMarca,
        startModificarMarca,
        startEliminarMarca,
        startTraerMarcas
    }
}