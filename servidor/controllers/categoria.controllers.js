
const Categoria = require('../models/categoria');

const crearCategoria = async(req, res) => {
    const { nombre, descripcion, activo, fechaAlta } = req.body;
    try {
        const categoria = new Categoria({
            nombre,
            descripcion,
            activo
        });

        await categoria.save();

        res.status(201).json({
            ok: true,
            categoria
        });
    } catch (error) {
        console.error(error);;

        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor, hablar con el adminstrador'
        })
    }

};

const eliminarcategoria = async(req, res) => {
    const  { id } = req.params;

    try {
        const categoriaEliminada = await Categoria.findByIdAndDelete(id);

        if(!categoriaEliminada) return res.status(404).json({
            ok: false,
            msg: 'No existe la categoria'
        });

        res.status(200).json({
            ok: true,
            categoria: categoriaEliminada
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor al eliminar la categoria, hablar con el adminstrador'
        });
    }
};

const modificarCategoria = async(req, res) => {
    const { id } = req.params;

    try {
        const categoriaModificada = await Categoria.findByIdAndUpdate(id, req.body, { new: true });

        if(!categoriaModificada) return res.stats(404).json({
            ok: false,
            msg: 'No existe la categoria'
        });

        res.status(200).json({
            ok: true,
            categoria: categoriaModificada
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor al modificar la categoria, hablar con el adminstrador'
        })
    }
};

const pausarCategoria = async(req, res) => {
    const { id } = req.params;

    try {
        const categoria = await Categoria.findById(id);

        if(!categoria) return res.status(404).json({
            ok: false,
            msg: 'No existe la categoria'
        });

        categoria.activo = !categoria.activo;

        await Categoria.findByIdAndUpdate(id, categoria, { new: true });

        res.status(200).json({
            ok: true,
            categoria
        })
    } catch (error) {
        console.error(error);;

        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor al pausar la categoria, hablar con el adminstrador'
        })
    }
};

const traerCategoriasActivas = async(req, res) => {
    try {
        const categorias = await Categoria.find({activo: true});

        res.status(200).json({
            ok: true,
            categorias
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor al traer las categorias, hablar con el adminstrador'
        })
    }
};

const traerCategoriaPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const categoria = await Categoria.findById(id);
        if(!categoria){
            res.status(404).json({
                ok: false,
                msg: 'No existe la categoria'
            });
        };


        res.status(200).json({
            ok: true,
            categoria
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor al traer la categoria, hablar con el adminstrador'
        });
    }
};


module.exports = {
    crearCategoria,
    eliminarcategoria,
    modificarCategoria,
    pausarCategoria,
    traerCategoriaPorId,
    traerCategoriasActivas,
    
};