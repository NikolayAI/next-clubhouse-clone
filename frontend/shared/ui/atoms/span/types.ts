import React from 'react';

type SpanKindType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SpanWeightType = 'normal' | 'bold'

export interface ISpanTag extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  kind: SpanKindType;
  fontWeight?: SpanWeightType,
  className?: string;
  children?: React.ReactNode;
}