import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("postgres", "admin", "admin", {
    port : 5432,
    host: "localhost",
    dialect: "postgres"
});