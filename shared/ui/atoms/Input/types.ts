import React from 'react';

type InputKindType = 'code'

export interface IInputTag extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string;
  kind?: InputKindType;
  inputRef?: React.RefObject<HTMLInputElement>;
}