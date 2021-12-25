import React from 'react';

export interface IChooseAvatarPhoto {
  saveFileHandler: (payload: File) => void;
  className?: string;
  component: React.FC<any>;
  componentProps: Record<string, any>;
}