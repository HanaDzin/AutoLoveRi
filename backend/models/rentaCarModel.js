import mongoose from "mongoose";

const rentaCarsSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
        default: 0,
    },
    mileage: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    },
    makeYear: {
        type: Number
    },
    motor: {
        type: String
    },
    transmission: {
        type: String
    },
   
}, {
    timestamps: true
});

const rentaCar = mongoose.model("RentaCar", rentaCarsSchema);

export default rentaCar;