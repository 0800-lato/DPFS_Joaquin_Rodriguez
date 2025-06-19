module.exports = {
    home: (req,res)=> {
        res.render('home')
    },
    addProduct: (req,res) => {
        res.render('addProduct')
    },
    productDetail: (req,res) => {
        res.render('productDetail')
    },
    register: (req,res) => {
        res.render('register')
    },
    login: (req,res) => {
        res.render('login')
    },
    productCart: (req,res) => {
        res.render('productCart')
    }
}