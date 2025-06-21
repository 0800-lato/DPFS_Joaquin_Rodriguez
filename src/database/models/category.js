const db = require("../models")

module.exports = (sequelize, DataTypes)=> {

    const alias = 'category'

    const cols = {
        name: {
            type: DataTypes.STRING(255),
            validate:{
                min: 3
            }
        },
    }

    const config = {
        tableName: 'categories',
        timestamps: false,
        paranoid:false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (model)=>{
        Category.hasMany(model.Product,{
            as: "products",
            foreignKey: "category_id"
        })
    };

    return Category;
}