const express = require("express");
const path = require('path');
const app = express();
const port = 3000
const indexRoutes = require('./src/routes/index.routes')

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/src/views'))

app.use(express.static(path.join(__dirname,'/src/public')));
app.use('/', indexRoutes)

app.listen(port,()=> {
    console.log(`http://localhost:${port}`)
})


// const db= require('./database/models')
// (()=>{
//   db.sequelize.sync({force:true})
// })()
