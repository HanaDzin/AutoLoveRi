import  express from "express";
const router = express.Router();

import {getNewCars, getNewCarById, createNewCar, updateNewCar, deleteNewCar,
        getUsedCars, getUsedCarById, createUsedCar, updateUsedCar, deleteUsedCar,
        getRentaCars, getRentaCarById, createRentaCar, updateRentaCar, deleteRentaCar} from '../controllers/CarsController.js';

import { admin, protect } from '../middleware/authMiddleware.js'


//uz proslijeđeni /api/ iz server.js
router.route('/newcars').get(getNewCars).post(createNewCar);
router.route('/newcars/:id').get(getNewCarById).put(updateNewCar).delete(deleteNewCar);

router.route('/usedcars').get(getUsedCars).post(createUsedCar);
router.route('/usedcars/:id').get(getUsedCarById).put(updateUsedCar).delete(deleteUsedCar);

router.route('/rentacar').get(getRentaCars).post(createRentaCar);
router.route('/rentacar/:id').get(getRentaCarById).put(updateRentaCar).delete(deleteRentaCar);


export default router;