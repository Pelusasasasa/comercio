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

    const startTraerProductos = async() => {
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

    const startAgregarProducto = async(producto: Producto) => {
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

    const startBorrarProducto = async(id: string) => {
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
    
    const startModificarProducto = async(producto: Producto) => {
        dispatch(savingProducto());

        try {
            const productoSend = {
                ...producto,
                marca: typeof producto.marca === 'string' ? producto.marca : (producto.marca as {_id: string})._id ,
                provedor: typeof producto.provedor === 'string' ? producto.provedor : (producto.provedor as {_id: string})._id,
                categoria: typeof producto.categoria === 'string' ? producto.categoria : (producto.categoria as {_id: string })._id,
                unidadMedida: typeof producto.unidadMedida === 'string' ? producto.unidadMedida : (producto.unidadMedida as {_id: string})._id,
                precio: typeof producto.precio === 'string' ? parseFloat(producto.precio) : producto.precio 
            }
            const { data } = await comercioApi.put(`producto/${productoSend._id}`, productoSend);

            if(data.ok){
                dispatch(updateProducto(data.producto));
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
        startTraerProductos,
        startAgregarProducto,
        startBorrarProducto,
        startModificarProducto,
        setProductoActivo
            
    }
}