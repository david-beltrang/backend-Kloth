import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
    "users",
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        username: {
            type: DataTypes.CHAR(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        biography: {
            type: DataTypes.CHAR(255),
            allowNull: true,
            defaultValue: null
        },
        registeredAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        eliminated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        eliminatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
        },
        userType: {
            type: DataTypes.ENUM("ADMIN", "USER"),
            allowNull: false,
            defaultValue: "USER",
        }
    },
    {
        timestamps: true,
    }
);