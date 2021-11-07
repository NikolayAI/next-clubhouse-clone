import React, {useState} from 'react';
import NumberFormat, {NumberFormatValues} from 'react-number-format';
import {useEvent, useStore} from 'effector-react';

import {Input} from '../../shared/ui';
import { userModel } from '../../entities/user';

export const EnterPhoneNumber: React.FC = () => {
  const phoneNumber = useStore(userModel.data.$phoneNumber);
  const setPhoneNumber = useEvent(userModel.events.setPhoneNumber);

  const handleChange = (value: NumberFormatValues) => {
    setPhoneNumber(value)
  }

  return (
    <NumberFormat
      className="phone-input"
      format="+# (###) ###-##-##"
      mask="_"
      placeholder="+7 (999) 999-99-99"
      customInput={Input}
      value={phoneNumber.value}
      onValueChange={handleChange}
    />
  );
};
