import {Article} from "../models/Article.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    return res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        return res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    return res.json(newArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

export const updateArticle   = async (req, res) => {

    try {
        const id = req.params.id;
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        await article.update(req.body);
        return res.json(article);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteArticle = async (req, res) => {
    try {
    const id = req.params.id;
    const article = await Article.findByPk(id);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    await article.destroy();
    return res.sendStatus(204); //delete ok
    }catch (error) {
        return res.status(500).json({ message: error.message });
    }
}