import {ICodeNumber} from '../../model';

export interface ICodeInputComponent {
  codes: ICodeNumber;
  setCodes: (payload: ICodeNumber) => ICodeNumber;
  disabled?: boolean;
  className?: string;
}