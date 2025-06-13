const Provedor = require('../models/Provedor');

const borrarProvedor = async (req, res) => {
    const { id } = req.params;

    try {
        const provedor = await Provedor.findByIdAndDelete(id);

        if(!provedor ) return res.status(404).json({
            ok: false,
            msg: 'No existe un provedor con ese id'
        });

        res.status(200).json({
            ok: true,
            msg: 'Provedor borrado'
        });

    } catch (error) {
        console.log(error)
        res.status({
            ok: false,
            msg: 'Error al borrar el provedor, hable con el administrador'
        })
    }
};

const crearProvedor = async (req, res) => {
    const { codigo } = req.body;
    try {
        let provedor = await Provedor.findOne({ codigo });

        if(provedor) return res.status(400).json({
            ok: false,
            msg: 'El provedor ya existe'
        });

        provedor = new Provedor(req.body);

        await provedor.save();

        res.status(200).json({
            ok: true,
            provedor
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el provedor, hable con el administrador'
        })
    };
};

const modificarProvedor = async(req, res) => {
    const { id } = req.params;

    try {
        const provedor = await Provedor.findByIdAndUpdate(id, req.body, { new: true });

        if(!provedor) return res.status(404).json({
            ok: false,
            msg: 'No existe un provedor con ese id'
        });

        res.status(200).json({
            ok: true,
            provedor
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar el provedor, hable con el administrador'
        })
    }
};

const traerProvedores = async(req, res) => {
    try {
        const provedores = await Provedor.find();

        res.status(200).json({
            ok: true,
            provedores
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al traer los provedores, hable con el administrador'
        })
    }
};

const traerProvedorPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const provedor = await Provedor.findById(id);

        if(!provedor) return res.status(404).json({
            ok: false,
            msg: 'No existe un provedor con ese id'
        });

        res.status(200).json({
            ok: true,
            provedor
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al traer el provedor, hable con el administrador'
        })
    }
};

const traerNombres = async(req, res) => {
    try {
        const provedores = await Provedor.find({}, 'nombre');

        res.status(200).json({
            ok: true,
            provedores
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al traer los provedores, hable con el administrador'
        })
    }
};

module.exports = {
    borrarProvedor,
    crearProvedor,
    modificarProvedor,
    traerProvedores,
    traerProvedorPorId,
    traerNombres
}