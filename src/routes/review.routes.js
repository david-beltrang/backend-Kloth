import {Router} from "express";

import { 
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
}  from '../controller/review.controller.js';

const router = Router();

//get localhost:3000/reviews
router.get('/reviews', getAllReviews);

//get localhost:3000/reviews/:id
router.get('/reviews/:id', getReviewById);

//post localhost:3000/reviews
router.post('/reviews', createReview);

//put localhost:3000/reviews/:id
router.put('/reviews/:id', updateReview);

//delete localhost:3000/reviews/:id
router.delete('/reviews/:id', deleteReview);

export default router;