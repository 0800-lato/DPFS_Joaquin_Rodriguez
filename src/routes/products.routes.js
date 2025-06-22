const express = require('express');
const { create } = require('../controllers/products.controller');
const { createCheck, editProductCheck } = require('../middlewares/validator');
const guestAuth = require('../middlewares/guestAuth');
const router = express.Router();
const multer = require('multer');

router.get('/addProduct', guestAuth, create);
//proceso de creacion del producto
router.post("/addProduct", upload.uploadProd.single('imagen'), createCheck, save);
//vista del producto
router.get('/productDetail/:id', product);
//vista del formulario de edicion
router.get("/edit/:id", edit);
//proceso de edicion
router.put('/edit/:id', upload.uploadProd.single('imagen'), editProductCheck, update);
//proceso de borrar
router.delete('/delete/:id', destroy);


module.exports = router;