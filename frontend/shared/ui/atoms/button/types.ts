import React from 'react';

type ButtonKindType = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link';

export interface IButtonTag
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind: ButtonKindType;
  text?: string | JSX.Element;
  iconUrl?: string;
  iconAlt?: string;
  iconHeight?: string | number;
  iconWidth?: string | number;
  leadIconUrl?: string;
  leadIconAlt?: string;
  leadIconHeight?: string | number;
  leadIconWidth?: string | number;
  suffixIconUrl?: string;
  suffixIconAlt?: string;
  suffixIconHeight?: string | number;
  suffixIconWidth?: string | number;
  isLoading?: boolean;
  loadingDescription?: string;
  className?: string;
  disabled?: boolean;
}
