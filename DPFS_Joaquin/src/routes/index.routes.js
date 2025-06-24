const express = require('express');
const {addProduct, productDetail, register, login, productCart, gethome} = require('../controllers/index.controller');
const router = express.Router();

//vista home
router.get('/', gethome);
//vista addProduct
// router.get('/addProduct', addProduct);
// //vista productDetail
// router.get('/productDetail', productDetail);
// //vista productDetail
// router.get('/register', register);
// //vista pogin
// router.get('/login',login);
// //Vista carrito
// router.get('/productCart',productCart)


module.exports = router;