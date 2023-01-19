import express from 'express';
import cors from 'cors';
import AuthController from './controllers/AuthController';
import UserModel from './models/UserModel';

const app = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));

const userModel = new UserModel();
const authController = new AuthController(userModel);

app.post('/auth', cors(), authController.login);

export default app;
