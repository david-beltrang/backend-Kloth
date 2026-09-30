import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define(
    "reviews",
    {
        reviewId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "userId",
            },
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "articles",
                key: "articleId",
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: DataTypes.CHAR(255),
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        eliminated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);