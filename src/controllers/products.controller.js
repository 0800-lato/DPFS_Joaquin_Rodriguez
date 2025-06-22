const db = require('../database/models')
const { validationResult } = require('express-validator');

module.exports = {
create: async(req, res) => { // vista del formulario de creacion del producto
        const categories = await db.Category.findAll();
        const hilos = await db.Hilo.findAll();
        res.render("addProduct.ejs",{categories, hilos})},
save: async(req, res) => { // metodo para que se agregue el nuevo producto en la base de datos
        try {
            const categories = await db.Category.findAll();
            const hilos = await db.Hilo.findAll();
            const resultValidator = validationResult(req);
            if(resultValidator.isEmpty()){
                let newModel = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category_id: req.body.category,
                    hilo_id: req.body.hilo,
                    image: req.file?.filename || "default.png"
                };
                await db.Product.create(newModel)

                res.redirect("/");

            } else{
                return res.render('addProduct.ejs',{
                    errors: resultValidator.mapped(), 
                    old: req.body, categories, hilos
                });
            };
            
        } catch (error) {
            console.log(error);
            
        }
    
    },
}