const Usuario = require('../models/Usuario');

const borrarUsuario = async(req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByIdAndDelete(id);

        if(!usuario) return res.status(404).json({
            msg: 'No existe el usuario',
            ok: false
        });

        res.status(200).json({
            usuario,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al eliminar el usuario, Hable con el administrador'
        })
    }
};

const crearUsuario = async(req, res) => {
    const { nombre } = req.body;

    try {
        const usuarioExiste = await Usuario.findOne({ nombre });

        if(usuarioExiste) return res.status(400).json({
            msg: 'El usuario ya existe',
            ok: false
        });

        const usuario = new Usuario(req.body);
        await usuario.save();

        res.status(200).json({
            usuario,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al crear el usuario, Hable con el administrador'
        })
    }
};

const modificarUsuario = async(req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

        if(!usuario) return res.status(404).json({
            msg: 'No existe el usuario',
            ok: false
        });

        res.status(200).json({
            usuario,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al modificar el usuario, Hable con el administrador'
        })
    }
};

const pausarUsuario = async(req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findById(id);

        if(!usuario) return res.status(404).json({
            msg: 'No existe el usuario',
            ok: false
        });

        usuario.activo = !usuario.activo;
        await usuario.save();

        res.status(200).json({
            usuario,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al pausar el usuario, Hable con el administrador'
        })
    }
};

const traerUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();

        res.status(200).json({
            usuarios,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al traer los usuarios, Hable con el administrador'
        })
    }
};

const traerUsuarioPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findById(id);

        if(!usuario) return res.status(404).json({
            msg: 'No existe el usuario',
            ok: false
        });

        res.status(200).json({
            usuario,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al traer el usuario, Hable con el administrador'
        })
    }
};

module.exports = {
    borrarUsuario,
    crearUsuario,
    modificarUsuario,
    pausarUsuario,
    traerUsuarios,
    traerUsuarioPorId
}