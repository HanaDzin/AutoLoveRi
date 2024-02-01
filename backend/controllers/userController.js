import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'
import generateToken from "../utils/generateToken.js";


// @desc autentifikacija korisnika i uzimanje tokena
// @route POST /api/users/login
// @acces public
const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body;

    //provjeri da li postoji korisnik sa tim email-om u bazi:
    const user = await User.findOne({  email });

    if (user && (await user.matchPassword(password))) { 
        generateToken(res, user._id);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);        //unauthorized
        throw new Error('Invalid email or password');
    }

});

// @desc registracija korisnika
// @route POST /api/users
// @acces public
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('Korisnik već postoji!');
    } 
    //kreiraj korisnika pomocu podataka koji stizu iz forme
    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('Neispravni korisnički podaci')
    }
});

// @desc Odjava (logout) korisnika / brisanje cookie-a
// @route POST /api/users/logout
// @acces private
const logoutUser = asyncHandler (async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ message: 'Uspješna odjava' });
});

// @desc dohvati profil korisnika
// @route GET /api/users/profile
// @acces private
const getUserProfile = asyncHandler (async (req, res) => {
   const user = await User.findById(req.user._id);

   if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
   } else {
    res.status(404);
    throw new Error('Korisnik nije pronađen');
   }
});

// @desc ažuriranje profil korisnika
// @route PUT /api/users/profile ----> ne treba id jer će se koristiti token
// @acces private
const updateUserProfile = asyncHandler (async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('Korisnik se ne može ažurirati jer ne postoji');
    }
    
});

// @desc dohvat svih korisnika (može samo admin)
// @route GET /api/users
// @acces private/admin
const getUsers = asyncHandler (async (req, res) => {
    res.send('Get users');
});

// @desc Dohvat određenog korisnika
// @route GET /api/users/:id
// @acces private/admin
const getUserById = asyncHandler (async (req, res) => {
    res.send('Get user by ID');
});

// @desc brisanje korisnika
// @route DELETE /api/users/:id
// @acces private/admin
const deleteUser = asyncHandler (async (req, res) => {
    res.send('Delete user');
});

// @desc Ažuriranje korisnika (admin)
// @route PUT /api/users/:id
// @acces private/admin
const updateUser = asyncHandler (async (req, res) => {
    res.send('Update user');
});

export { authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    getUserById, 
    updateUserProfile, 
    getUsers, 
    deleteUser, 
    updateUser} 

