const express = require('express');
const { create, save, product, edit, update, destroy } = require('../controllers/products.controller');
const { createCheck, editProductCheck } = require('../middlewares/validator');
const guestAuth = require('../middlewares/guestAuth');
const router = express.Router();
const multer = require('multer');
const upload = require('../middlewares/multer')


router.get('/addProduct', create);
//proceso de creacion del producto
router.post("/addProduct", upload.uploadProd.single('image'), createCheck, save);
//vista del producto
router.get('/productDetail/:id', product);
// //vista del formulario de edicion
router.get("/edit/:id", edit);
// //proceso de edicion
router.put('/edit/:id', upload.uploadProd.single('image'), editProductCheck, update);
// //proceso de borrar
router.delete('/delete/:id', destroy);


module.exports = router;