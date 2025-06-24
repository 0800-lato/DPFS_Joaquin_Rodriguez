const db = require('../database/models')

const indexController = {
    gethome: async(req,res)=>{
        try {
            const models = await db.Product.findAll(
                {include:["Category","Hilo"]}
            );
            // console.log(productsDB);

            res.render("home.ejs",{ models }); 
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = indexController;

// module.exports = {

//     addProduct: (req,res) => {
//         res.render('addProduct')
//     },
//     productDetail: (req,res) => {
//         res.render('productDetail')
//     },
//     register: (req,res) => {
//         res.render('register')
//     },
//     login: (req,res) => {
//         res.render('login')
//     },
//     productCart: (req,res) => {
//         res.render('productCart')
//     }
// }