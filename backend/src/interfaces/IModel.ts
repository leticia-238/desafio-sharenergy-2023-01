import { IUser } from './IUser';

export interface IModel {
  readOne(user: IUser): Promise<IUser | null>
}