import { request } from './axios';
import { IRoomsResponse, IAuthResponse } from './types';

const authGitHub = async () => {
  const { data } = await request.get<IAuthResponse>('/auth/github');
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
