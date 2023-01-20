import { Model, model as mongooseCreateModel, Schema as MongooseSchema } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { IUser } from '../interfaces/IUser';

const mongooseSchema = new MongooseSchema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { versionKey: false });

class UserModel implements IModel {
  private _mongooseModel: Model<IUser>;
  
  constructor() {
    this._mongooseModel = mongooseCreateModel('User', mongooseSchema);
    this._mongooseModel.create({
      username: 'desafiosharenergy', 
      password: 'sh@r3n3rgy', 
    });
  }
  
  readOne = async (payload:IUser): Promise<IUser | null> => {
    const user = await this._mongooseModel.findOne({ ...payload });
    return user;
  };
}

export default UserModel;