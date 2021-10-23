import React from 'react';

type PKindType = 'sm' | 'md'

export interface IPTag {
  kind: PKindType;
  className?: string;
  children?: React.ReactNode;
}