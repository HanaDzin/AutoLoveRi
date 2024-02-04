import  express from "express";
const router = express.Router();

import {getNewCars, getNewCarById, createNewCar, updateNewCar,
        getUsedCars, getUsedCarById,
        getRentaCars, getRentaCarById} from '../controllers/CarsController.js';

import { admin, protect } from '../middleware/authMiddleware.js'


//uz proslijeđeni /api/ iz server.js
router.route('/newcars').get(getNewCars).post(createNewCar);
router.route('/newcars/:id').get(getNewCarById).put(updateNewCar);

router.route('/usedcars').get(getUsedCars);
router.route('/usedcars/:id').get(getUsedCarById);

router.route('/rentacar').get(getRentaCars);
router.route('/rentacar/:id').get(getRentaCarById);


export default router;