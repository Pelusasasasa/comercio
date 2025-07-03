import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import comercioApi from '../api/comercioApi';
import { addCliente, deleteCliente, getCliente, putCliente, saving, setActive, setClientes } from '../store/cliente/clienteSlice';
import { ClienteFormState } from '../types/cliente';


export const useClienteStore = () => {

    const { clienteActive, clientes, isSavingCliente, messageErrorCliente } = useSelector((state: { cliente: 
        {
            clienteActive: ClienteFormState | null,
            clientes: ClienteFormState[],
            isSavingCliente: boolean,
            messageErrorCliente: string | null
        }
    }) => state.cliente);
    const dispach = useDispatch();

    
            const traerClientes = async() => {
                dispach(saving());

                const { data } = await comercioApi.get('/cliente');

                if(data.ok){
                    dispach(setClientes(data.clientes))
                }else{
                    await Swal.fire('No se pudo obtener los clientes', data.msg, 'error')
                }
            };

            const traerClientePorCodigo = async(codigo: string) => {
                dispach(saving());

                try {
                    const { data } = await comercioApi.get(`/cliente/codigo/${codigo}`);
                    if(data.ok){
                        dispach(getCliente(data.cliente))
                    }else{
                        await Swal.fire('No se pudo obtener el cliente', data.msg, 'error')
        
                    }
                } catch (error) {
                    await Swal.fire('No se pudo obtener el cliente', error.response.data.msg, 'error')
                }
            };

            const agregarCliente = async(cliente) => {
                try {
                    const { data } = await comercioApi.post('/cliente', cliente);

                    if(data.ok){
                        dispach(addCliente( data.cliente ));
                    }else{
                        Swal.fire('Error Al cargar Cliente', data.msg, 'error');
                    };
                } catch (error) {
                    console.log(error.response);
                    await Swal.fire('Error al cargar Cliente', error.response.data.msg, 'error')
                }
            };

            const borrarCliente = async(id) => {
                dispach(saving());
                try {
                    const { data } = await comercioApi.delete(`cliente/${id}`);

                    if(data.ok){
                        dispach(deleteCliente(id))
                    }else{
                        await Swal.fire('No se pudo eliminar el cliente', data.msg, 'error');
                    };
                } catch (error) {
                    console.log(error.response);
                    await Swal.fire('No se pudo eliminar cliente', error.response.data.msg, 'error')
                }
            };

            const modificarCliente = async(cliente) => {
                console.log(cliente)
                dispach(saving());
                try {
                    const { data } = await comercioApi.put(`cliente/${cliente._id}`, cliente);
                    if(data.ok){
                        dispach(putCliente(data.cliente))
                    }else{
                        Swal.fire('No se pudo modificar el cliente', data.msg, 'error')
                    };
                } catch (error) {
                    console.log(error);
                    Swal.fire('No se pudo modificar el cliente', error.response.data.msg, 'error')
                }
            };

            const setActiveCliente = async(id) => {
                dispach(setActive(id))
            };

    return {
        //Atributos
        clienteActive,
        clientes,
        isSavingCliente,
        messageErrorCliente,

        //Metodos
        traerClientes,
        traerClientePorCodigo,
        agregarCliente,
        borrarCliente,
        modificarCliente,
        setActiveCliente,
    }

};