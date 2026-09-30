import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

// Reglas de negocio de docs/requirements.md:
// RN-01 calificacion entera entre 0 y 5
// RN-02 maximo una resena por usuario y articulo
// RN-03 calificacion y texto siempre juntos
// RN-04 texto de maximo 300 caracteres
export const Review = sequelize.define(
  'reviews',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0, max: 5 },
    },
    reviewText: {
      type: DataTypes.STRING(300),
      allowNull: false,
      validate: { notEmpty: true, len: [1, 300] },
    },
    // Puede quedar en null si el autor elimina su cuenta (RF-35: "Usuario eliminado")
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: 'users', key: 'id' },
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'articles', key: 'id' },
    },
  },
  {
    indexes: [{ unique: true, fields: ['userId', 'articleId'] }],
  }
);
