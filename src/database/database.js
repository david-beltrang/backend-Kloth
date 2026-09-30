import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("KlothDB", "postgres", "1qazXCVB", {
    port : 5432,
    host: "localhost",
    dialect: "postgres"
});