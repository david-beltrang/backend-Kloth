import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Follower = sequelize.define(
    "follower",
    {
        idFollower: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idUserFollower: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "userId",
            },
        },
        idUserFollowing: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "userId",
            },
        },

    }
);
