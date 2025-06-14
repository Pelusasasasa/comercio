import { useDispatch, useSelector } from 'react-redux';
import { usuarios } from '../data/Usuarios';
import { setUsuario } from '../store/usuario/usuarioSlice';

export const useUsuarioStore = () => {
    const { usuario, isSaving, messageError } = useSelector(state => state.usuario);
    const dispatch = useDispatch();

    const startGetUsuario = (codigo) => {
        const usuario = usuarios.find(usuario => usuario.codigo === codigo);

        dispatch(setUsuario(usuario));

        return usuario
    };

    return {
        //Atritubos
        usuario,
        isSaving,
        messageError,

        //Metodos
        startGetUsuario
    }
};