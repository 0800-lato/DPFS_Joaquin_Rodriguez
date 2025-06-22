const db = require('../database/models')

module.exports = {
create: async(req, res) => { // vista del formulario de creacion del producto
        const categories = await db.Category.findAll();
        const hilos = await db.Hilo.findAll();
        res.render("addProduct.ejs",{categories, hilos});
}}