import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import { IModel } from '../interfaces/IModel';
import { UserZodSchema } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'jwt_secret';

class AuthController {
  constructor(private model:IModel) {}
  
  login: RequestHandler = async (req, res) => {
    const validatePayload = UserZodSchema.safeParse(req.body);
    const errMessage = 'Incorrect username or password';
    
    if (!validatePayload.success) {
      return res.status(404).json({ error: errMessage });
    }
    const user = await this.model.readOne(validatePayload.data); 
    if (!user) return res.status(401).json({ error: errMessage });
    
    const { username, password } = user;
    const token = jwt.sign({ username, password }, secret);
    res.status(200).json({ token });
  };
  
  static authenticate: RequestHandler = async (req, res) => {
    const { authorization = '' } = req.headers;
    try { 
      jwt.verify(authorization, secret); 
    } catch (err) { 
      return res.status(401).json({ error: 'Token must be a valid token' });
    }
    res.status(200);
  };
}

export default AuthController;