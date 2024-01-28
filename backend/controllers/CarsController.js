import asyncHandler from "../middleware/asyncHandler.js";

import newCar from '../models/newCarModel.js'
import usedCar from '../models/usedCarModel.js'
import rentaCar from "../models/rentaCarModel.js";


// @desc dohvat svih novih vozila
// @route GET /api/newcars
// @acces public
const getNewCars = asyncHandler (async (req, res) => {
    const newCars = await newCar.find({});
    res.json(newCars);
});


//@desc Dohvat vozila po id-u
//@route GET /api/newcars/:id
//@access public
const getNewCarById = asyncHandler (async (req, res) => {
    const theNewCar = await newCar.findById(req.params.id);

    if (theNewCar) {
        return res.json(theNewCar);
    } 
    res.status(404);
    throw new Error('New Car not found');
});

const getUsedCars = asyncHandler (async (req, res) => {
    const usedCars = await usedCar.find({});
    res.json(usedCars);
});



const getUsedCarById = asyncHandler (async (req, res) => {
    const theUsedCar = await usedCar.findById(req.params.id);

    if (theUsedCar) {
        return res.json(theUsedCar);
    } 
    res.status(404);
    throw new Error('Used Car not found');
});

const getRentaCars = asyncHandler (async (req, res) => {
    const rentaCars = await rentaCar.find({});
    res.json(rentaCars);
});


const getRentaCarById = asyncHandler (async (req, res) => {
    const theRentaCar = await rentaCar.findById(req.params.id);

    if (theRentaCar) {
        return res.json(theRentaCar);
    } 
    res.status(404);
    throw new Error('RentaCar not found');
});

export {getNewCars, getNewCarById, getUsedCars, getUsedCarById, getRentaCars, getRentaCarById };