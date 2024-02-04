import  express from "express";
const router = express.Router();

import { authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    getUserById, 
    updateUserProfile, 
    getUsers, 
    deleteUser, 
    updateUser
} from '../controllers/userController.js';

import { protect, admin } from '../middleware/authMiddleware.js'

//uz proslijeđeni /api/ iz server.js

//za dohvat svih korisnika, mora se biti registiran i biti admin!
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth',  authUser);

//dohvat profila korisnika i mogucnost azuriranja njegovog profila = zasticeno pomocu protect funkcije iz authMiddleware
// (jer samo reg korisnik to moze)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

//brisanje, dohvat određenog korisnika i ažuriranje od strane admina
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);



export default router;