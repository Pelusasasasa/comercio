const { traerCheques, crearCheque, traerChequePorId, borrarCheque, modificarCheque } = require("../controllers/cheque.controllers");

const { Router } = require('express');
const { validarCheque } = require("../validators/cheque.validator");
const validarCampos = require("../middlewares/validarCampos");
const router = Router();

router.route('/')
    .get(traerCheques)
    .post(validarCheque, validarCampos, crearCheque)
router.route('/:id')
    .get(traerChequePorId)
    .put(validarCheque, validarCampos, modificarCheque)
    .delete(borrarCheque)

module.exports = router;