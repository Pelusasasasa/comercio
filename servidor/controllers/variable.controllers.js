const Variable = require('../models/Variable');

const eliminarVariable = async (req, res) => {
    try {
        const { id } = req.params;
        const variable = await Variable.findByIdAndDelete(id);
        if (!variable) {
            return res.status(404).json({
                ok: false,
                msg: 'Variable no encontrada'
            });
        };

        res.status(200).json({
            ok: true,
            variable
        });
    } catch (error) {
        console.error('Error al eliminar la variable:', error);
        res.status(500).json({ 
            ok: false,
            msg: 'Error al eliminar la variable, hable con el administrador'
        });
    }
};

const cargarVariable = async (req, res) => {
    try {
        const variable = new Variable(req.body);
        await variable.save();

        res.status(201).json({
            ok: true,
            variable
        })
    } catch (error) {
        console.error('Error al cargar la variable:', error);
        res.status(500).json({ 
            ok: false,
            msg: 'Error al cargar la variable'
        });
    }
};

const modificarVariable = async (req, res) => {
    try {
        const { id } = req.params;
        const variable = await Variable.findByIdAndUpdate(id, req.body, {new: true});

        if(!variable){
            return res.status(404).json({
                ok: false,
                msg: 'Variable no encontrada'
            });
        };

        res.status(200).json({
            ok: true,
            variable
        });
    } catch (error) {
        console.error('Error al modificar la variable:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar la variable, hable con el administrador'
        });
    }
};

const obtenerVariables = async (req, res) => {
    try {
        const variables = await Variable.find();
        res.status(200).json({
            ok: true,
            variables
        });
    } catch (error) {
        console.error('Error al obtener las variables:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las variables, hable con el administrador'
        });
    }
};

const obtenerVariablePorId = async(req, res) => {
    try {
        const { id } = req.params;
        const variable = await Variable.findById(id);

        res.status(200).json({
            ok: true,
            variable
        });
    } catch (error) {
        console.error('Error al obtener la variable por ID:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la variable por ID, hable con el administrador'
        });
    }
};

const obtenerVariablePorClave = async(req, res) => {
    try {
        const { clave } = req.params;
        const variable = await Variable.findOne({ clave: clave.toUpperCase() });

        res.status(200).json({
            ok: true,
            variable
        });
    } catch (error) {
        console.error('Error al obtener la variable por clave:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la variable por clave, hable con el administrador'
        });
    }
};


module.exports = {
    cargarVariable,
    eliminarVariable,
    modificarVariable,
    obtenerVariables,
    obtenerVariablePorId,
    obtenerVariablePorClave,
};