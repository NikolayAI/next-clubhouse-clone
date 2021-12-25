export interface IUserResponse {
  fullname: string,
  avatarUrl: string,
  isActive: number,
  username: string,
  phone: string
}

export interface IRoomsResponse {
  id: string;
  title: string;
  guests: string[];
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
}

export interface IUploadFileResponse {
  url: string;
}
