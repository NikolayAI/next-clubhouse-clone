import React from 'react';
import NumberFormat, {NumberFormatValues} from 'react-number-format';

import {Input} from '../../../../shared/ui';
import {IEnterPhoneNumber} from './types';

export const EnterPhoneNumber: React.FC<IEnterPhoneNumber> = ({phoneNumber, setPhoneNumber, className}) => {
  return (
    <NumberFormat
      className={`input ${className}`}
      format="+# (###) ###-##-##"
      mask="_"
      placeholder="+7 (999) 999-99-99"
      customInput={Input}
      value={phoneNumber.value}
      onValueChange={(value: NumberFormatValues) => setPhoneNumber(value)}
    />
  );
};
