import React from 'react';

type CardKindType = 'sm' | 'md' | 'lg'

export interface ICardComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  kind: CardKindType;
  fullWidth?: boolean;
  className?: string;
}