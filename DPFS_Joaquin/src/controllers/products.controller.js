const db = require('../database/models')
const { validationResult } = require('express-validator');

module.exports = {
product: async(req, res) => { // vista del producto
        try {
            const modelFound = await db.Product.findByPk(req.params.id);
            
            res.render('productDetail.ejs', { modelFound });  
        } catch (error) {
            console.log(error);
        }
    },
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
edit: async(req, res) => { // vista del formulario de edicion del producto
        try {
            const categories = await db.Category.findAll();
            const hilos = await db.Hilo.findAll();
            let modelEdit = await db.Product.findByPk(req.params.id)
    
            res.render("editProduct",{modelEdit, hilos, categories});
        } catch (error) {
            console.log(error);
        }
    },
update:async(req,res)=>{ // metodo para actualizar el producto una vez ya haya sido editado
        try {
            // traigo el modelo a editar de la base de datos
            let modelEdit = await db.Product.findByPk(req.params.id);

            // traigo las categorias
            const categories = await db.Category.findAll();

            // traigo los tipos de archivos
            const hilos = await db.Hilo.findAll();

            // hago uso de express-validator para las validaciones del backend
            const resultValidator = validationResult(req);

            if(resultValidator.isEmpty()){
                // acá vendria la creacion del producto editado
                // en cada campo, el producto se modifica con la informacion que viene del formulario
                // en caso de que algun campo venga vacio, 
                // se usa la informacion del producto que tenia en ese campo antes de ser modificado
                let modUpdate = {
                    name: req.body.name || modelEdit.name,
                    description: req.body.description || modelEdit.description,
                    price: req.body.price || modelEdit.price,
                    category_id: req.body.category || modelEdit.category_id,
                    hilo_id: req.body.hilo || modelEdit.hilo_id,
                    image: req.file?.filename || modelEdit.image,
                }
                
                // se actualiza el producto con su respectivo id
                await db.Product.update(modUpdate, {
                    where:{
                        id: req.params.id
                    }
                })

                // una vez actualizado el producto se redirecciona a la vista del home o pagina principal
                res.redirect('/');
            } else{
                return res.render('editProduct',{
                    errors: resultValidator.mapped(), 
                    old: req.body, categories, hilos, modelEdit
                });
            }

        } catch (error) {
            console.log(error);
        }
    },
    destroy:async(req,res)=>{ // metodo para eliminar el producto
        try {
            const modelDelete = await db.Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            console.log('modelo borrado', modelDelete);
            // redireccionar
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }

    }
}