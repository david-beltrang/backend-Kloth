import {Router} from "express";

import { getArticleDetail } from '../controller/articleDetail.controller.js';

const router = Router();

//get localhost:3000/articles/:id/detail
router.get('/articles/:id/detail', getArticleDetail);

export default router;
