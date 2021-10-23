import React from 'react';
import {ISpan} from './types';
import styled from 'styled-components';
import {lineHeights, sizes, weights} from './constants';

export const SpanTag: React.FC<ISpan> = ({
  kind,
  weight,
  className,
  children,
  ...props
}) => {
  return <span className={className} {...props}>{children}</span>;
};

export const Span = styled(SpanTag)`
  font-size: ${({kind}) => sizes[kind] ?? '14px'};
  line-height: ${({kind}) => lineHeights[kind] ?? '20px'};
  font-weight: ${({weight}) => weights[weight ?? 'bold'] ?? 700};
`;
