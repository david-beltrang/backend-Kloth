import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Article = sequelize.define(
    "articles",
    {
        articleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        typeArticle: {
            type: DataTypes.ENUM("PRENDA", "OUTFIT", "MARCA", "EVENTO"),
            allowNull: false,
        },
        title: {
            type: DataTypes.CHAR(200),
            allowNull: false,  
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },  
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "userId",  
            },
        },
        eliminated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        imageArticle: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);