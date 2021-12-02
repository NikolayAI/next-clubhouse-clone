import React from 'react';

import { IEnterFullName } from './types';
import { Input } from '../../../../shared/ui';

export const FullNameInput: React.FC<IEnterFullName> = ({
  fullName,
  setFullName,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  return (
    <Input
      className={className}
      placeholder="Enter full name"
      maxLength={50}
      value={fullName}
      onChange={handleChange}
    />
  );
};
