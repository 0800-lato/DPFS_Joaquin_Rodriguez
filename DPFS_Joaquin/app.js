const express = require("express");
const path = require('path');
const app = express();
const port = 3000
const indexRoutes = require('./src/routes/index.routes')
const db = require("./src/database/models");
const productsRoutes = require('./src/routes/products.routes')
const methodOverride = require('method-override')
const cors = require('cors')

// API routes
// const usersApiRoutes = require('./routes/API/users.API.routes');
const productsApiRoutes = require('./src/routes/api/products.api.routes.js');
const categoriesApiRoutes = require('./src/routes/api/categories.api.routes.js');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/src/views'))

// Permitir solicitudes desde el frontend
app.use(cors());
app.use(express.static(path.join(__dirname,'/src/public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use('/', indexRoutes);
app.use('/product', productsRoutes);
// app.use("/api/users", usersApiRoutes);
app.use("/api/products", productsApiRoutes);
app.use("/api/categories", categoriesApiRoutes);


app.listen(port,async()=> {
    // await db.sequelize.sync({force: true}), 
    // console.log('All models were synchronized successfully'),
    `http://localhost:${port}`
})


// const db= require('./database/models')
// (()=>{
//   db.sequelize.sync({force:true})
// })()
