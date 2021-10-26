import React from 'react';

type ButtonKindType = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link'

export interface IButtonTag extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKindType;
  text?: string;
  icon?: React.ReactNode;
  leadIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}