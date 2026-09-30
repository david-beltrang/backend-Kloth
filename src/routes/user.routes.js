import {Router} from 'express';
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getReviewsByUser
}  from '../controller/users.controller.js';

const router = Router();

//get localhost:3000/users
router.get('/users', getAllUsers);

//get localhost:3000/users/:id
router.get('/users/:id', getUserById);

//post localhost:3000/users
router.post('/users', createUser);

//put localhost:3000/users/:id
router.put('/users/:id', updateUser);

//delete localhost:3000/users/:id
router.delete('/users/:id', deleteUser);

//get localhost:3000/users/:id/reviews
router.get('/users/:id/reviews', getReviewsByUser);

export default router;