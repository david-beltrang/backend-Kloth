import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Clothing = sequelize.define(
    "prendas",
    {
        prendaId: {
            type: DataTypes.INTEGER,
            primaryKey: true,   
            autoIncrement: true,
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "articles",
                key: "articleId",
            },
        },
        size: {
            type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
            allowNull: false,   
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM("TOP", "BOTTOM", "FOOTWEAR", "ACCESSORY"),
            allowNull: false,
        },
        material: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,  
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);