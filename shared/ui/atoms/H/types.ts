import React from 'react';

type HKindType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface IHTag extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  kind: HKindType;
  className?: string;
  children?: React.ReactNode;
}