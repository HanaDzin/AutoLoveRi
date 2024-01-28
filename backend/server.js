import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';

// Uvoz ruta:
import CarsRoutes from './routes/CarsRoutes.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send(`API is running`);
});

// Da ne moramo u CarsRoutes pisati cijeli link
app.use('/api', CarsRoutes);


//kreirani middleware za potencijalne pogreške:
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server port ${port}`));
