import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Event = sequelize.define(
    "events",
    {
        eventId: {
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
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,   
        },
        organizer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);