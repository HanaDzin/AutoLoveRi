import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'; 
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';

// Uvoz ruta:
import CarsRoutes from './routes/CarsRoutes.js';
import UserRoutes from './routes/UserRoutes.js'
import OrderRoutes from './routes/OrderRoutes.js'
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cookie parser middleware:
app.use(cookieParser());

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send(`API is running`);
});

app.use('/api', CarsRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/orders', OrderRoutes);
 
//kreirani middleware za potencijalne pogreške:
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server port ${port}`));
