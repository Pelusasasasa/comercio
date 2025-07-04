import { useDispatch, useSelector } from "react-redux";
import { Venta } from "../types/venta";
import { activeProductoVenta, addProductoAVentaActiva, addVenta, clearClienteActivo, deleteProductoAVentaActiva, deleteVenta, finishSavingVenta, putNumeroSerie, savingVenta, setActiveVenta, setClienteActive, setClientes, setProductoActive, setProductos, setVentas, updateProductoVenta, updateVenta } from "../store/venta/ventaSlice";
import Swal from "sweetalert2";
import comercioApi from "../api/comercioApi";
import { ClienteFormState } from "../types/cliente";
import { Producto, ProductoActivo } from "../types/producto";

interface RootState {
    venta: {
        ventas: Venta[];
        ventaActive: Venta | null;
        isSavingVenta: boolean;
        messageErrorVenta: string | null;
        clientes: ClienteFormState[];
        productos: Producto[];
        clienteActivo: ClienteFormState | null;
        productoActivo: ProductoActivo | null;
    }
}

export const useVentaStore = () => {

    const { isSavingVenta, ventas, messageErrorVenta, ventaActive, clienteActivo, clientes, productos, productoActivo} = useSelector((state: RootState) => state.venta);
    const dispatch = useDispatch();

    const startAgregarVenta = async(venta: Venta) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.post('venta', venta);

            if(data.ok){
                dispatch(addVenta(data.venta));
            }else{
                await Swal.fire('No se pudo cargar la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo cargar la venta', error.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingVenta())
        }
    };

    const startBorrarVenta = async(id: string) => {

        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.delete(`venta/${id}`)

            if(data.ok){
                dispatch(deleteVenta(id));
            }else{
                await Swal.fire('No se pudo eliminar la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar la venta', error.response?.data?.msg, 'error');
        }finally{
            dispatch(finishSavingVenta())
        };
    };

    const startModificarVenta = async(venta: Venta) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi.put(`venta/${venta._id}`, venta);
            if(data.ok){
                dispatch(updateVenta(venta));
            }else{
                await Swal.fire('No se pudo modificar la venta',  data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar la venta', error.response?.data?.msg, 'error');
        }
    };

    const startTraerVentaPorId = async(id: string) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi(`venta/${id}`);
            if(data.ok){
                dispatch(setActiveVenta(data.venta._id));
            }else{
                await Swal.fire('No se puede obtener la venta', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se puede obtener la venta', error.response?.data?.msg)
        }finally{
            dispatch(finishSavingVenta())
        }
    };
    
    const startTraerVentas = async(id: string) => {
        dispatch(savingVenta());

        try {
            const { data } = await comercioApi(`venta`);
            if(data.ok){
                dispatch(setVentas(data.ventas));
            }else{
                await Swal.fire('No se puede obtener las ventas', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se puede obtener las ventas', error.response?.data?.msg)
        }finally{
            dispatch(finishSavingVenta())
        }
    };

    const startTraerClienteParaVenta = async(id: string) => {
        try {
            const { data } = await comercioApi.get(`cliente/codigo/${id}`);

            if(data.ok){
                dispatch(setClienteActive(data.cliente))
            }else{
                await Swal.fire('No se pudo obtener el cliente', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener el cliente', error.response?.data?.msg, 'error');
        }
    };
    
    const startTraerClientesParaVentas = async(text: string) => {
        dispatch(savingVenta())

        try {
            const { data } = await comercioApi.get(`cliente/busqueda/${text}`);

            if(data.ok){
                dispatch(setClientes(data.clientes));
            }else{
                await Swal.fire('No se pudo obtener los clientes', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener los clientes', error.response?.data?.msg, 'error');
        }
    };

    const startTraerProductoParaVenta = async(id: string) => {
        try {
            const { data } = await comercioApi.get(`producto/${id}`);

            if(data.ok){
                data.producto.cantidad = 1;
                dispatch(setProductoActive(data.producto))
            }else{
                await Swal.fire('No se pudo obtener el producto', data.msg, 'error')
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener el producto', error.response?.data?.msg, 'error')
        }
    }

    const startTraerProductosParaVentas = async(text: string) => {
      dispatch(savingVenta());

      try {
        const { data } = await comercioApi.get(`producto/busqueda/${text}`);

        if(data.ok){
            dispatch(setProductos(data.productos));
        }else{
            await Swal.fire('No se pudo obtener los productos', data.msg, 'error');
        }
      } catch (error) {
        console.log(error)
        await Swal.fire('No se pudo obtener los productos', error.response?.data?.msg, 'error')
      }
    };

    const startClearClientesParaVentas = async() => {
        dispatch(setClientes([]))
    };

    const startClearProductosParaVentas = async() => {
        dispatch(setProductos([]))
    };

    const startAgregarProductoAVentaActiva = async(producto: ProductoActivo, cantidad: string) => {
        const productoModificado = {...producto, cantidad: parseFloat(cantidad)}
        dispatch(addProductoAVentaActiva(productoModificado))
    };
    
    const startDeleteProductoAVentaActiva = async(id: string) => {
        dispatch(deleteProductoAVentaActiva(id));
    };

    const startActivarProductoDeVentas = async(id: string) => {
        dispatch(activeProductoVenta(id))
    };

    const startModficarProductoDeVenta = async(producto: ProductoActivo) => {
        dispatch(updateProductoVenta(producto));
    };

    const startModificarNumeroSerie = async(id: string, text: string) => {
        dispatch(putNumeroSerie({text, id}))
    };

    const startLimpiarClienteActivo = () => {
        dispatch(clearClienteActivo());
    };


    return {
        //Atributos
        ventaActive,
        ventas,
        isSavingVenta,
        messageErrorVenta,
        clienteActivo,
        clientes,
        productos,
        productoActivo,

        //Metodos
        startAgregarVenta,
        startBorrarVenta,
        startModificarVenta,
        startTraerVentaPorId,
        startTraerVentas,
        

        //Aux
        startTraerClienteParaVenta,
        startTraerClientesParaVentas,
        startClearClientesParaVentas,
        startLimpiarClienteActivo,

        startActivarProductoDeVentas,
        startAgregarProductoAVentaActiva,
        startClearProductosParaVentas,
        startDeleteProductoAVentaActiva,
        startModficarProductoDeVenta,
        startTraerProductoParaVenta,
        startTraerProductosParaVentas,
        startModificarNumeroSerie,
    }
}