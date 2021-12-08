import React from 'react';

type HTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type HKindType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IHTag extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: HTagType;
  kind: HKindType;
  className?: string;
  children?: React.ReactNode;
}