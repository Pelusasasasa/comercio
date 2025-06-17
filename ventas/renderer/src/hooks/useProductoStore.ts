import { useSelector, useDispatch } from 'react-redux';
import { addProducto, deleteProducto, savingProducto, setProductoActive, setProductos, updateProducto } from '../store/producto/productoSlice';
import { Producto } from '../types/producto';
import Swal from 'sweetalert2';
import comercioApi from '../api/comercioApi';

interface RootState {
    producto: {
        productos: Producto[];
        productoActive: Producto | null;
        isSavingProducto: boolean;
        messageErrorProducto: string | null;
    }
}

export const useProductoStore = () => {
    const {productos, productoActive, isSavingProducto, messageErrorProducto} = useSelector((state: RootState) => state.producto);
    const dispatch = useDispatch();

    const traerProductos = async() => {
        dispatch(savingProducto());

        try {
            const { data } = await comercioApi.get('producto');

            if(data.ok){
                dispatch(setProductos(data.productos))
            }else{
                await Swal.fire('No se pudo obtener los productos', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los productos', error.response.data?.msg, 'error')
        }
    };

    const agregarProducto = async(producto: Producto) => {
        dispatch(savingProducto());

        try {
            const { data }  = await comercioApi.post('producto', producto);

            if(data.ok){
                dispatch(addProducto(data.producto));
            }else{
                await Swal.fire('No se pudo agregar el producto', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo agregar el producto', error.response.data?.msg, 'error');
        }
    };

    const borrarProducto = async(id: string) => {
        dispatch(savingProducto());

        try {
            const { data } = await comercioApi.delete(`producto/${id}`);

            if(data.ok){
                dispatch(deleteProducto(id));
            }else{
                await Swal.fire('No se pudo borrar el producto', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo borrar el producto', error.response.data?.msg, 'error');
        }
    };
    
    const modificarProducto = async(producto: Producto) => {
        dispatch(savingProducto());

        try {
            const { data } = await comercioApi.put(`producto/${producto._id}`, producto);

            if(data.ok){
                dispatch(updateProducto(producto));
            }else{
                await Swal.fire('No se pudo modificar el producto', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar el producto', error.response.data?.msg, 'error');
        }
    };

    const setProductoActivo = (id: string) => {
        dispatch(setProductoActive(id))
    };

    return {
        //Atributos
        productoActive,
        productos,
        isSavingProducto,
        messageErrorProducto,

        //Metodos
        traerProductos,
        agregarProducto,
        borrarProducto,
        modificarProducto,
        setProductoActivo
    }
}