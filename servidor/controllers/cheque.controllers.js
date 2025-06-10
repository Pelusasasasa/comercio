const Cheque = require('../models/Cheque');

const borrarCheque = async(req, res) => {
    const { id } = req.params;

    try {
        const cheque = await Cheque.findByIdAndDelete(id);

        if(!cheque) return res.status(404).json({
            ok: false,
            msg: 'No existe el cheque'
        });

        res.status(200).json({
            cheque,
            ok: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el cheque, hable con el administrador'
        });
    }
};

const crearCheque = async(req, res) => {
    try {
        const cheque = new Cheque(req.body);

        await cheque.save();

        res.status(201).json({
            ok: true,
            cheque
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al cargar Cheque, hable con el administrador'
        });
    }
};

const modificarCheque = async(req, res) => {
    const { id } = req.params;

    try {
        const cheque = await Cheque.findByIdAndUpdate(id, req.body, { new: true });

        if(!cheque) return res.status(404).json({
            ok: false,
            msg: 'No existe el cheque'
        });

        res.status(200).json({
            ok: true,
            cheque
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error al modificar el cheque, hable con el administrador'
        });
    }
};

const traerCheques = async(req, res) => {
    try {
        const cheques = await Cheque.find().sort({fechaRecibido: -1});

        res.status(200).json({
            ok: true,
            cheques
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer los cheque, hable con el administador'
        })
    }
};

const traerChequePorId = async(req, res) => {
    const { id } = req.params;

    try {
        const cheque = await Cheque.findById(id);

        if(!cheque) return res.status(404).json({
            ok: false,
            msg: 'No existe el cheque'
        });
        
        res.status(200).json({
            ok: true,
            cheque
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer el cheque, hable con el administrador'
        })
    }
};


module.exports = {
    crearCheque,
    borrarCheque,
    modificarCheque,
    traerCheques,
    traerChequePorId
}