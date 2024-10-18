
import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'


configDotenv();
const app = express();

// CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: process.env.CORS_ORIGIN,  // e.g., 'http://localhost:3000' or 'https://myfrontend.com'
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true,
}));
app.use(express.urlencoded({ extended : true , limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());

// routes import
import userRouter from './src/routes/user.routes.js'
import eventRouter from './src/routes/event.routes.js'
import blogRouter from './src/routes/blog.routes.js'

// Routes

app.use('/api/users', userRouter);
// http://localhost:8000/api/users/*


app.use('/api/events', eventRouter);
// http://localhost:8000/api/events/*


app.use('/api/blogs', blogRouter);
// http://localhost:8000/api/blogs/*

export {app};