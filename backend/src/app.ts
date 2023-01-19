import express from 'express';
import AuthController from './controllers/AuthController';
import UserModel from './models/UserModel';

const app = express();

app.use(express.json());

const userModel = new UserModel();
const authController = new AuthController(userModel);

app.post('/auth', authController.login);

export default app;
