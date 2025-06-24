const express = require("express");
const { getCategories } = require("../../controllers/api/categories.api.controller.js");

const router = express.Router();


// Endpoint de categorias
router.get("/", getCategories);


module.exports = router;