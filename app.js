const express = require("express");
const app = express();
const port = 4000;

//Carpeta publica
app.use (express.static(__dirname + "/public"));

//rutas
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/addProduct",(req, res) => {
    res.sendFile(__dirname + "/views/addProduct.html");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})