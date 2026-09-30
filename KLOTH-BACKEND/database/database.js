import { Sequelize } from "sequilize";

export const sequlize = new Sequelize("KlothDB", "postgres", "1qazXCVB", {
    port: 5432,
    host: "localhost",
    dialect : "postgres"
});