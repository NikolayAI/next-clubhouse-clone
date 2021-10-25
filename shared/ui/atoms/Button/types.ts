import React from 'react';

type ButtonKindType = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link'

export interface IButtonTag extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKindType;
  text?: string;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  iconBefore?: boolean;
  className?: string;
  disabled?: boolean;
}