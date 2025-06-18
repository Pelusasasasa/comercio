import { useDispatch, useSelector } from "react-redux";
import { addCategoria, deleteCategoria, savingCategoria, setActiveCategoria, setCategorias, updateCategoria } from "../store/categoria/categoriaSlice";
import { Categoria } from "../types/categoria";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";

interface RootState {
    categoria: {
        categorias: Categoria[];
        categoriaActive: Categoria | null;
        isSavingCategoria: boolean;
        messageErrorCategoria: string | null;
    }
}

export const useCategoriaStore = () => {

    const { categorias, categoriaActive, isSavingCategoria, messageErrorCategoria  } = useSelector((state: RootState) => state.categoria)
    const dispatch = useDispatch();

    const activarCategoria = (id: string) => {
        dispatch(setActiveCategoria(id));
    };

    const startAgregarCategoria = async(categoria: Categoria) => {
        dispatch(savingCategoria());
        try {
            const { data } = await comercioApi.post('categoria', categoria);

            if( data.ok ){
                dispatch(addCategoria(data.categoria))
            }else{
                await Swal.fire('No se pudo agregar la categoria', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo agregar la categoria', error.response.data?.msg, 'error')
        }
    };

    const startEliminarCategoria = async(id: string) => {
        dispatch(savingCategoria())
        try {
            const { data } = await comercioApi.delete(`categoria/${id}`);

            if(data.ok){
                dispatch(deleteCategoria(id));
            }else{
                await Swal.fire('No se pudo eliminar la categoria', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la categoria', error.response.data?.msg, 'error')
        }
    };

    const startModificarCategoria = async(categoria: Categoria) => {
        dispatch(savingCategoria())
        try {
            const { data } = await comercioApi.put(`categoria/${categoria._id}`, categoria);

            if(data.ok){
                dispatch(updateCategoria(data.categoria));
            }else{
                await Swal.fire('No se pudo modificar la categoria', data.msg, 'error');
            };

        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la categoria', error.response.data?.msg, 'error') ;
        }
    };

    const startTraerCategorias = async() => {
        dispatch(savingCategoria())
        try {
            const { data } = await comercioApi.get('categoria');

            if(data.ok){
                dispatch(setCategorias(data.categorias));
            }else{
                await Swal.fire('No se pudo obtener las categorias', data.msg, 'error');
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener las categorias', error.response.data?.msg, 'error');
        }
    };


    return {
        //Atributos
        categorias,
        categoriaActive,
        isSavingCategoria,
        messageErrorCategoria,

        //Metodos
        activarCategoria,
        startAgregarCategoria,
        startModificarCategoria,
        startEliminarCategoria,
        startTraerCategorias
    }
};