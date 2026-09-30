import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  // Con PostgreSQL local (autenticacion "trust") la contrasena puede venir vacia.
  // Se pasa null en vez de '' para que el driver pg no intente enviar una contrasena vacia.
  DB_PASSWORD || null,
  {
    host: DB_HOST || 'localhost',
    port: Number(DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);
