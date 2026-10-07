import { DataTypes } from "sequelize";

import { sequelize } from "../database/database.js";

export const Comment = sequelize.define(

    "comments",

    {

        commentId: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true,

        },

        reviewId: {

            type: DataTypes.INTEGER,

            allowNull: false,

            references: {

                model: "reviews",

                key: "reviewId",

            },

        },

        userId: {

            type: DataTypes.INTEGER,

            allowNull: false,

            references: {

                model: "users",

                key: "userId",

            },

        },

        text: {

            type: DataTypes.CHAR(255),

            allowNull: false,

        },

        likesCount: {

            type: DataTypes.INTEGER,

            allowNull: false,

            defaultValue: 0,

        },

        eliminated: {

            type: DataTypes.BOOLEAN,

            allowNull: false,

            defaultValue: false,

        },

    },

    {

        timestamps: true,

    }

);
