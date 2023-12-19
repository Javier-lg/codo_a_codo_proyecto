const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/adminControllers.js');

router.get('/admin', adminControllers.admin) /*solicitud de datos*/
router.get('/admin/create', adminControllers.create)
router.post('/admin/create', adminControllers.creating) /*envio de datos*/
router.get('/admin/edit/:id', adminControllers.editItem) 
router.put('/admin/edit/:id', adminControllers.editingItem) /*actualizar o crear datos*/
router.delete('/admin/delete/:id', adminControllers.delete) /*eliminar recursos del servidor*/

module.exports=router