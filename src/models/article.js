import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

// Categorias de articulo segun docs/functional-spec.md de la app.
// Publicaciones: PRENDA, OUTFIT. Catalogo: MARCA, EVENTO.
// Los nombres coinciden con el enum ArticleType de la app.
export const ARTICLE_CATEGORIES = ['PRENDA', 'OUTFIT', 'MARCA', 'EVENTO'];

// Campos obligatorios de cada categoria (ademas de name y description)
const REQUIRED_BY_CATEGORY = {
  PRENDA: ['brand', 'clothingCategory', 'color'],
  OUTFIT: ['style', 'creatorId'],
  MARCA: ['country'],
  EVENTO: ['city', 'country', 'startDate', 'endDate', 'organizer'],
};

// Una sola tabla para todos los articulos: los campos que no aplican a la
// categoria quedan en null. averageRating y el numero de resenas no se guardan,
// se calculan a partir de las reviews.
export const Article = sequelize.define(
  'articles',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.ENUM(...ARTICLE_CATEGORIES), allowNull: false },

    // Comunes
    name: { type: DataTypes.STRING(150), allowNull: false, validate: { notEmpty: true } },
    description: { type: DataTypes.TEXT, allowNull: false, validate: { notEmpty: true } },
    imageUrl: { type: DataTypes.STRING, allowNull: true, validate: { isUrl: true } }, // imagen o logo

    // Prenda
    brand: { type: DataTypes.STRING(100), allowNull: true },
    clothingCategory: { type: DataTypes.STRING(50), allowNull: true }, // chaqueta, tenis, bolso...
    color: { type: DataTypes.STRING(50), allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true, validate: { min: 0 } }, // precio de referencia en COP, no es una venta

    // Outfit
    style: { type: DataTypes.STRING(50), allowNull: true }, // Streetwear, Casual, Formal...

    // Marca
    website: { type: DataTypes.STRING, allowNull: true, validate: { isUrl: true } },
    brandType: { type: DataTypes.STRING(50), allowNull: true }, // Ropa, Calzado, Perfumes, Accesorios...
    foundedYear: { type: DataTypes.INTEGER, allowNull: true, validate: { min: 1000, max: 9999 } },

    // Marca y Evento
    country: { type: DataTypes.STRING(100), allowNull: true },

    // Evento
    city: { type: DataTypes.STRING(100), allowNull: true },
    startDate: { type: DataTypes.DATEONLY, allowNull: true },
    endDate: { type: DataTypes.DATEONLY, allowNull: true },
    organizer: { type: DataTypes.STRING(150), allowNull: true },

    // Usuario que creo el articulo (opcional: el catalogo es de toda la comunidad)
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: 'users', key: 'id' },
    },
  },
  {
    validate: {
      // Verifica que cada categoria traiga sus campos propios
      requiredFieldsByCategory() {
        const missing = (REQUIRED_BY_CATEGORY[this.category] || []).filter(
          (field) => this[field] === null || this[field] === undefined || this[field] === ''
        );
        if (missing.length > 0) {
          throw new Error(`Faltan campos para ${this.category}: ${missing.join(', ')}`);
        }
      },
      validEventDates() {
        if (this.startDate && this.endDate && this.endDate < this.startDate) {
          throw new Error('La fecha de finalizacion no puede ser anterior a la de inicio');
        }
      },
    },
  }
);
