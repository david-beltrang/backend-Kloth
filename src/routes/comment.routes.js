import {Router} from "express";

import {
    getCommentsByReview,
    createComment,
    updateComment,
    deleteComment
} from '../controller/comment.controller.js';

const router = Router();

//get localhost:3000/reviews/:id/comments
router.get('/reviews/:id/comments', getCommentsByReview);

//post localhost:3000/reviews/:id/comments
router.post('/reviews/:id/comments', createComment);

//put localhost:3000/comments/:id
router.put('/comments/:id', updateComment);

//delete localhost:3000/comments/:id
router.delete('/comments/:id', deleteComment);

export default router;
