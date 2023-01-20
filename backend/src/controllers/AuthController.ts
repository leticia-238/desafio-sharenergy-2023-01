import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import { IModel } from '../interfaces/IModel';
import { UserZodSchema } from '../interfaces/IUser';
import { SuccessAnswers, ClientErrors } from '../helpers/httpStatus';

const secret = process.env.JWT_SECRET || 'jwt_secret';

class AuthController {
  constructor(private model:IModel) {}
  
  login: RequestHandler = async (req, res) => {
    const validatePayload = UserZodSchema.safeParse(req.body);
    const errMessage = 'Incorrect username or password';
    
    if (!validatePayload.success) {
      return res.status(ClientErrors.BadRequest).json({ error: errMessage });
    }
    const user = await this.model.readOne(validatePayload.data); 
    if (!user) return res.status(ClientErrors.Unauthorized).json({ error: errMessage });
    
    const { username, password } = user;
    const token = jwt.sign({ username, password }, secret);
    res.status(SuccessAnswers.Ok).json({ token });
  };
  
  static authenticate: RequestHandler = async (req, res) => {
    const { authorization = '' } = req.headers;
    const errMessage = 'Token must be a valid token';
    try { 
      jwt.verify(authorization, secret); 
    } catch (err) { 
      return res.status(ClientErrors.Unauthorized).json({ error: errMessage });
    }
    res.status(SuccessAnswers.Ok);
  };
}

export default AuthController;