import { Article } from '../models/article.js';
import { User } from '../models/user.js';

// Solo los datos del creador que se muestran junto al articulo
const CREATOR_ATTRIBUTES = ['id', 'username', 'fullName', 'profileImage'];

// GET /articles: todos los articulos con su creador, los mas recientes primero
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [{ model: User, as: 'creator', attributes: CREATOR_ATTRIBUTES }],
      // id como desempate: los datos iniciales comparten el mismo createdAt
      order: [['createdAt', 'DESC'], ['id', 'DESC']],
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /articles/:id: detalle de un articulo con su creador
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [{ model: User, as: 'creator', attributes: CREATOR_ATTRIBUTES }],
    });
    if (!article) return res.status(404).json({ message: 'Articulo no encontrado' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
