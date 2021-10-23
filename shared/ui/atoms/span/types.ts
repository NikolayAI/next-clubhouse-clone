import React from 'react';

type SpanKindType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SpanWeightType = 'normal' | 'bold'

export interface ISpanTag {
  kind: SpanKindType;
  weight?: SpanWeightType,
  className?: string;
  children?: React.ReactNode;
}