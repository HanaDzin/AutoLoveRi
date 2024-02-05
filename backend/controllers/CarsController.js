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
    throw new Error('Novo vozilo nije pronađeno');
});

//@desc     Dodaj novo vozilo (admin)
//@route    POST /api/newcars
//@access   admin
const createNewCar = asyncHandler (async (req, res) => {
    const newcar = new newCar ({
        brand: 'BMW',
        model: 'M2',
        price: 0,
        user: '65bebe5c95c1a057b6076715',
        image: '/src/assets/bmw2.png',
        makeYear: 2016,
        motor: 'Diesel',
        transmission: 'Manual',
        description: 'Lorem ipsum'
    })

    const createdNewCar = await newcar.save();
    res.status(201).json(createdNewCar);
});

// @desc Ažuriranje novog vozila
// @route PUT /api/newcars/:id
// @acces private/admin
const updateNewCar = asyncHandler (async (req, res) => {
    const { model, brand, price, description, image, makeYear, motor, transmission} = req.body;

    const newcar = await newCar.findById(req.params.id);

    if (newcar) {
        newcar.model = model;
        newcar.brand = brand;
        newcar.price = price;
        newcar.description = description;
        newcar.image = image;
        newcar.makeYear = makeYear;
        newcar.motor = motor;
        newcar.transmission = transmission;

        const updatedNewCar = await newcar.save();
        res.json(updatedNewCar);
    } else {
        res.status(404);
        throw new Error('Resurs nije pronađen');
    }
});
// @desc Brisanje novog vozila
// @route DELETE /api/newcars/:id
// @acces private/admin
const deleteNewCar = asyncHandler (async (req, res) => {

    const newcar = await newCar.findById(req.params.id);

    if (newcar) {
        await newCar.deleteOne({ _id: newcar._id })
        res.status(200).json({ message: 'Novo vozilo obrisano' })
    } else {
        res.status(404);
        throw new Error('Resurs nije pronađen');
    }
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
    throw new Error('Rabljeno vozilo nije pronađeno');
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

export {getNewCars, 
    getNewCarById,
    createNewCar,
    updateNewCar,
    deleteNewCar,
    getUsedCars, 
    getUsedCarById, 
    getRentaCars, 
    getRentaCarById };