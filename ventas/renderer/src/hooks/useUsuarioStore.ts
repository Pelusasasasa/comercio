import { useDispatch, useSelector } from 'react-redux';
import { Usuario } from '../types/usuario';
import { addUsuario, clearUsuarioSlice, deleteUsuario, savingUsuario, setActiveUsuario, setUsuarios, updateUsuario } from '../store/usuario/usuarioSlice';
import Swal from 'sweetalert2';
import comercioApi from '../api/comercioApi';

interface RootState {
    usuario: {
        usuarios: Usuario[];
        usuarioActive: Usuario | null;
        isSavingUsuario: boolean;
        messageErrorUsuario: null;
    }
};

export const useUsuarioStore = () => {
    const { usuarioActive, usuarios, isSavingUsuario, messageErrorUsuario } = useSelector((state: RootState) => state.usuario);
    const dispatch = useDispatch();

    const activeUsuario = (id: string) => {
        dispatch(setActiveUsuario(id));
    };

    const limpiarUsuarioSlice = () => {
        dispatch(clearUsuarioSlice())
    };

    const startAgregarUsuario = async(usuario: Usuario) => {
        dispatch(savingUsuario());
        usuario.activo = true;
        
        try {
            const { data } = await comercioApi.post('usuario', usuario);

            if(data.ok){
                dispatch(addUsuario(data.usuario));
            }else{
                await Swal.fire('No se pudo guardar el usuario', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo guardar el usuario', error?.response?.data?.msg, 'error');
        }
    };

    const startEliminarUsuario = async(id: string) => {
        try {
            const { data } = await comercioApi.delete(`usuario/${id}`);
            if(data.ok){
                dispatch(deleteUsuario(data.usuario._id));
            }else{
                await Swal.fire('No se pudo eliminar el usuario', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo eliminar el usuario', error?.response?.data?.msg, 'error');
        }
    };

    const startModificarUsuario = async(usuario: Usuario) => {
        dispatch(savingUsuario());
        try {
            const { data } = await comercioApi.put(`usuario/${usuario._id}`, usuario);
            if(data.ok){
                dispatch(updateUsuario(data.usuario));
            }else{
                await Swal.fire('No se pudo modificar el usuario', data.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo modificar el usuario', error?.response?.data?.msg, 'error');
        }
    };

    const startTraerUsuarios = async() => {
        dispatch(savingUsuario());

        try {
            const { data } = await comercioApi.get(`usuario`);
            if(data.ok){
                dispatch(setUsuarios(data.usuarios));
            }else{
                await Swal.fire('No se pudieron obtener los usuarios', data.msg);
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudieron obtener los usuarios', error?.response?.data?.msg, 'error');
        };
    };

    const startTraerUnUsuario = async(codigo: string) => {
        dispatch(savingUsuario());

        try {
            const { data } = await comercioApi.get(`usuario/codigo/${codigo}`);
            if(data.ok){
                dispatch(setActiveUsuario(data.usuario));
                return data.usuario;
            }else{
                await Swal.fire('No se pudo obtener el usuario', data.msg);
            };
        } catch (error) {
            console.log(error);
            await Swal.fire('No se pudo obtener el usuario', error?.response?.data?.msg, 'error');
        }
    };

    

    return {
        //Atritubos
        usuarioActive,
        usuarios,
        isSavingUsuario,
        messageErrorUsuario,

        //Metodos
        activeUsuario,
        limpiarUsuarioSlice,
        startAgregarUsuario,
        startEliminarUsuario,
        startModificarUsuario,
        startTraerUsuarios,
        startTraerUnUsuario
    }
};