import { request } from './axios';
import { IRoomsResponse } from './types';

const getRooms = async () => {
  const { data } = await request.get<IRoomsResponse[]>('/rooms.json');
  return data;
};

export const API = {
  getRooms,
};
