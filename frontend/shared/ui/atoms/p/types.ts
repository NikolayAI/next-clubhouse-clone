import React from 'react';

type PKindType = 'sm' | 'md'

export interface IPTag extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  kind: PKindType;
  className?: string;
  children?: React.ReactNode;
}