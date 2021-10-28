import React from 'react';

type ButtonKindType = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link'

export interface IButtonTag extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKindType;
  text?: string;
  iconUrl?: string;
  iconAlt?: string;
  leadIconUrl?: string;
  leadIconAlt?: string;
  suffixIconUrl?: string;
  suffixIconAlt?: string;
  className?: string;
  disabled?: boolean;
}