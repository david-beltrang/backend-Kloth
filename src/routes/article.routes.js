import {Router} from "express";

import { 
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getReviewsByArticle
}  from '../controller/article.controller.js';

const router = Router();

//get localhost:3000/articles
router.get('/articles', getAllArticles);

//get localhost:3000/articles/:id
router.get('/articles/:id', getArticleById);

//post localhost:3000/articles
router.post('/articles', createArticle);

//put localhost:3000/articles/:id
router.put('/articles/:id', updateArticle);

//delete localhost:3000/articles/:id
router.delete('/articles/:id', deleteArticle);

//get localhost:3000/articles/:id/reviews
router.get('/articles/:id/reviews', getReviewsByArticle);

export default router;