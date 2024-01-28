import  express from "express";
const router = express.Router();

import {getNewCars, getNewCarById, 
        getUsedCars, getUsedCarById,
        getRentaCars, getRentaCarById} from '../controllers/CarsController.js';


//uz proslijeđeni /api/ iz server.js
router.route('/newcars').get(getNewCars);
router.route('/newcars/:id').get(getNewCarById);

router.route('/usedcars').get(getUsedCars);
router.route('/usedcars/:id').get(getUsedCarById);

router.route('/rentacar').get(getRentaCars);
router.route('/rentacar/:id').get(getRentaCarById);


export default router;