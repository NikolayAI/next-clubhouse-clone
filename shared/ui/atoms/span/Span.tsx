import React from 'react';
import styled from 'styled-components';

import {ISpanTag} from './types';
import {fontSizes, fontWeights, lineHeights} from './constants';

export const SpanTag: React.FC<ISpanTag> = ({
  kind,
  fontWeight,
  className,
  children,
  ...props
}) => {
  return <span className={className} {...props}>{children}</span>;
};

export const Span = styled(SpanTag)`
  font-size: ${({kind}) => fontSizes[kind] ?? '14px'};
  line-height: ${({kind}) => lineHeights[kind] ?? '20px'};
  font-weight: ${({fontWeight}) => fontWeights[fontWeight ?? 'bold']};
`;
