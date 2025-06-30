const { Router } = require('express');
const { crearRemito, traerRemitos, modificarRemito, borrarRemito, traerRemitosActivos } = require('../controllers/remito.controllers');
const router = Router();

router.route('/')
    .post(crearRemito)
    .get(traerRemitos)
router.route('/remitoActivo')
    .get(traerRemitosActivos)
router.route('/:id')
    .delete(borrarRemito)    
    .put(modificarRemito)



module.exports = router;