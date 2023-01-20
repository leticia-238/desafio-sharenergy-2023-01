import { ObjectId } from 'mongoose';
import { z } from 'zod';

export const UserZodSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
}).strict();

export type IUser = z.infer<typeof UserZodSchema>;

export interface IUserWithId extends IUser {
  _id: ObjectId
}