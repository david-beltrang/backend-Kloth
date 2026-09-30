import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Brand = sequelize.define(
    "brands",
    {
        brandId: {
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
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isUrl: true },
        },
        originCountry: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        foundedAt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);