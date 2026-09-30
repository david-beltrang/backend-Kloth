import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Outfit = sequelize.define(
    "outfits",
    {
        outfitId: {
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
        style: {
            type: DataTypes.ENUM("CASUAL", "FORMAL", "DEPORTIVO", "ELEGANTE"),
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);