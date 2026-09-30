import { User } from '../models/user.js';
import { Article } from '../models/article.js';
import { Review } from '../models/review.js';

export function setupRelations() {
  // 1 a muchos: un usuario escribe muchas resenas.
  // SET NULL: al borrar el usuario sus resenas se conservan como "Usuario eliminado" (RF-35)
  User.hasMany(Review, { foreignKey: 'userId', as: 'userReviews', onDelete: 'SET NULL' });
  Review.belongsTo(User, { foreignKey: 'userId', as: 'author' });

  // 1 a muchos: un articulo tiene muchas resenas; al borrar el articulo se borran sus resenas
  Article.hasMany(Review, { foreignKey: 'articleId', as: 'articleReviews', onDelete: 'CASCADE', hooks: true });
  Review.belongsTo(Article, { foreignKey: 'articleId', as: 'article' });

  // 1 a muchos: un usuario crea muchos articulos (opcional: marcas y eventos no tienen creador)
  User.hasMany(Article, { foreignKey: 'creatorId', as: 'createdArticles', onDelete: 'SET NULL' });
  Article.belongsTo(User, { foreignKey: 'creatorId', as: 'creator' });
}
