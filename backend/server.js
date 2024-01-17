import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cars from './data/CarData.js'

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send(`API is running`);
});

//prikaz svih vozila
app.get('/api/cars', (req, res) => {
    res.json(cars);
});

//dohvat određenog vozila
app.get('/api/cars/:id', (req, res) => {
    const car = cars.find((c) => c._id === req.params.id);
    res.json(car);
});



app.listen(port, () => console.log(`Server port ${port}`));
