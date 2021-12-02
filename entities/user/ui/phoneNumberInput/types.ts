import { NumberFormatValues } from 'react-number-format';

export interface IEnterPhoneNumber {
  phoneNumber: NumberFormatValues;
  setPhoneNumber: (payload: NumberFormatValues) => void;
  className?: string;
}
