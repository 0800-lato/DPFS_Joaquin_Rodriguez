module.exports = (sequelize, DataTypes)=> {

    const alias = 'Hilo'

    const cols = {
        name: {
            type: DataTypes.STRING(255),
            validate:{
                min: 3
            }
        },
    }

    const config = {
        tableName: 'hilos',
        timestamps: false,
        paranoid:false
    }

    const Hilo = sequelize.define(alias, cols, config);

    Hilo.associate = (model)=>{
        Hilo.hasMany(model.Product,{
            as: "Products",
            foreignKey: "hilo_id"
        })
    };

    return Hilo;
}