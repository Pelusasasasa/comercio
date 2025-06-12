const Cliente = require('../models/Cliente');

const borrarCliente = async (req, res) => {
    const {id}  = req.params;
    try {
        const cliente = await Cliente.findByIdAndDelete(id);

        if(!cliente) return res.status(404).json({
            ok: false,
            msg: 'No existe cliente'
        });

        res.status(200).json({
            ok: true,
            cliente
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar el cliente, hable con el administrador'
        })
    }

};

const crearCliente = async(req, res) => {
    try {
        const cliente = new Cliente(req.body);

        await cliente.save();

        res.status(201).json({
            ok: true,
            cliente
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar el cliente, hable con el administrador'
        })
    };
};

const modificarCliente = async(req, res) => {
    const { id } = req.params;

    try {

        const cliente = await Cliente.findByIdAndUpdate(id, req.body, {new: true});

        if(!cliente) return res.status(404).json({
            ok: false,
            msg: 'No existe el cliente'
        });

        res.status(200).json({
            ok: true,
            cliente
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modioficar el cliente, hable con el administrador'
        });
    }


};

const traerClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find();

        res.status(200).json({
            ok: true,
            clientes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo Obtener los clientes, hable con el administrador'
        })
    }
};

const traerClientePorId = async(req, res) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findById(id);


        if(!cliente) return res.status(404).json({
            ok: false,
            msg: 'No existe el cliente'
        });

        res.status(200).json({
            ok: true,
            cliente
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer cliente, hable con el administrador'
        })
    };
};


module.exports = {
    borrarCliente,
    crearCliente,
    modificarCliente,
    traerClientes,
    traerClientePorId
};