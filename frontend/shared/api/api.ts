import { request } from './axios';
import { IRoomsResponse, IUserResponse } from './types';

const authGitHub = async () => {
  const { data } = await request.get<IUserResponse>('/auth/github');
  return data;
};

const getRooms = async () => {
  const { data } = await request.get<IRoomsResponse[]>('/rooms.json');
  return data;
};

export const API = {
  authGitHub,
  getRooms,
};
