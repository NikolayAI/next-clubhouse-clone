import jwt from 'jsonwebtoken';import { IUserResponse } from '../../contracts';export const createJwtToken = (user: IUserResponse) => {  const token = jwt.sign(    { data: user },    process.env.SECRET_KEY_JWT || '',    {      expiresIn: process.env.JWT_MAX_AGE,      algorithm: 'HS256',    }  );  return token;};