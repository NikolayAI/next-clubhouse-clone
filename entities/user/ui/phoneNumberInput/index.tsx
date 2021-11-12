import React from 'react';
import NumberFormat, {NumberFormatValues} from 'react-number-format';

import {Input} from '../../../../shared/ui';
import {IEnterPhoneNumber} from './types';

export const PhoneNumberInput: React.FC<IEnterPhoneNumber> = ({phoneNumber, setPhoneNumber, className}) => {
  const handleChange = (value: NumberFormatValues) => {
    setPhoneNumber(value)
  }
  return (
    <NumberFormat
      className={`input ${className}`}
      format="+# (###) ###-##-##"
      mask="_"
      placeholder="+7 (999) 999-99-99"
      customInput={Input}
      value={phoneNumber.value}
      onValueChange={handleChange}
    />
  );
};
