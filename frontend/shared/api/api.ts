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

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.set('photo', file);
  const { data } = await request.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return data;
};

export const API = {
  authGitHub,
  getRooms,
  uploadFile,
};
