const UnidadMedida = require('../models/UnidadMedida');

const borrarUnidadMedidad = async(req, res) => {
    const { id } = req.params;

    try {
        const unidadMedida = await UnidadMedida.findByIdAndDelete(id);

        if(!unidadMedida) return res.status(404).json({
            ok: false,
            msg: 'No existe la unidad de Medida'
        })

        res.status(200).json({
            ok: true,
            unidadMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar unidad de Medida, hable con el administrador'
        });
    }
};

const crearUnindadMedida = async(req, res) => {

    try {
        const unidadMedida = new UnidadMedida(req.body);

        await unidadMedida.save();

        res.status(201).json({
            ok: true,
            unidadMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al cargar unidad de Medida, hable con el administrador'
        });
    }
};

const modificarUnidadMedida = async(req, res) => {
    const { id } = req.params;

    try {
        const unidadMedida = await UnidadMedida.findByIdAndUpdate(id, req.body, { new: true });

        if(!unidadMedida) return res.status(404).json({
            ok: false,
            msg: 'No existe la unidad de Medida'
        })

        res.status(200).json({
            ok: true,
            unidadMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar unidad de Medida, hable con el administrador'
        });
    }
};

const pausarUnidadMedida = async(req, res) => {
    const { id } = req.params;

    try {
        const unidadMedida = await UnidadMedida.findById(id);

        if(!unidadMedida) return res.status(404).json({
            ok: false,
            msg: 'No existe la unidad de Medida'
        });

        unidadMedida.activo = !unidadMedida.activo;

        unidadMedida.save();

        res.status(200).json({
            ok: true,
            unidadMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al pausar unidad de Medida, hable con el administrador'
        });
    }

}

const traerUnidadesMedida = async(req, res) => {
    try {
        const unidadesMedida = await UnidadMedida.find();

        res.status(200).json({
            ok: true,
            unidadesMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer unidades de Medida, hable con el administrador'
        });
    }

};

const traerUnidadesMedidaPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const unidadMedida = await UnidadMedida.findById(id);

        if(!unidadMedida) return res.status(404).json({
            ok: false,
            msg: 'No existe la unidad de Medida'
        })

        res.status(200).json({
            ok: true,
            unidadMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer unidad de Medida, hable con el administrador'
        });
    }
};

const traerNombres = async(req, res) => {
    try {
        const unidadesMedida = await UnidadMedida.find({}, 'nombre');

        res.status(200).json({
            ok: true,
            unidadesMedida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer unidades de Medida, hable con el administrador'
        });
    }
};


module.exports = {
    borrarUnidadMedidad,
    crearUnindadMedida,
    modificarUnidadMedida,
    pausarUnidadMedida,
    traerUnidadesMedida,
    traerUnidadesMedidaPorId,
    traerNombres
};