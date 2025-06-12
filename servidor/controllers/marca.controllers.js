const Marca = require('../models/marca');


const borrarMarca = async(req, res) => {
    const { id } = req.params;
    try {
        const marca = await Marca.findByIdAndDelete(id);

        if(!marca) return res.status(404).json({
                ok: false,
                msg: 'Marca no encontrada'
        });


        res.status(200).json({
            ok: true,
            marca
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar marca'
        });
    }
};

const cargarMarca = async (req, res) => {
    try {
        const marca = new Marca(req.body);

        await marca.save();

        res.status(201).json({
            ok: true,
            marca
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al cargar marca'
        })
    }
};

const modificarMarca = async(req, res) => {
    const { id } = req.params;

    try {
        const marca = await Marca.findByIdAndUpdate(id, req.body, {new: true});
        console.log(marca)
        if(!marca) return res.status(404).json({
            ok: false,
            msg: 'Marca no encontrada'
        });

        res.status(200).json({
            ok: true,
            marca
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Erro al modificar la marca, hable con el administrador'
        })
    }
};

const traerMarcas = async(req, res) => {
    try {
        const marcas = await Marca.find();

        res.status(200).json({
            ok: true,
            marcas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer las marcas, hable con el administrador'
        })
    }
};

const traerMarcasActivas = async(req, res) => {
    try {
        const marcas = await Marca.find({activo: true});

        res.status(200).json({
            ok: true,
            marcas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer las marcas, hable con el administrador'
        })
    }
};

const cambiarActivoMarca = async(req, res) => {
    const { id } = req.params;

    try {
        const marca = await Marca.findById(id);
        if(!marca) return res.status(404).json({
            ok: false,
            msg: 'Marca no encontrada'
        });

        marca.activo = !marca.activo;
        await Marca.findByIdAndUpdate(id, marca, {new: true});

        res.status(200).json({
            ok: true,
            marca
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al cambiar el estado de la marca, hable con el administrador'
        })
    }
};

module.exports = {
    borrarMarca,
    cambiarActivoMarca,
    cargarMarca,
    modificarMarca,
    traerMarcas,
    traerMarcasActivas
};