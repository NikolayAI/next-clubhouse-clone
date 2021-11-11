import {ICodeNumber} from '../../model';
import {ICodeNumberEventParam} from '../../types';

export interface ICodeInputComponent {
  codes: ICodeNumber;
  setCodes: (payload: ICodeNumberEventParam) => void;
  disabled?: boolean;
  className?: string;
}