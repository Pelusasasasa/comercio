const { traerCheques, crearCheque, traerChequePorId, borrarCheque, modificarCheque } = require("../controllers/cheque.controllers");

const { Router } = require('express');
const router = Router();

router.route('/')
    .get(traerCheques)
    .post(crearCheque)
router.route('/:id')
    .get(traerChequePorId)
    .put(modificarCheque)
    .delete(borrarCheque)

module.exports = router;