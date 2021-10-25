import React from 'react';
import styled from 'styled-components';

import {IPTag} from './types';
import {fontSizes, lineHeights} from './constants';

export const PTag: React.FC<IPTag> = ({
  kind,
  className,
  children,
  ...props
}) => {
  return <p className={className} {...props}>{children}</p>;
};

export const P = styled(PTag)`
  font-size: ${({kind}) => fontSizes[kind] ?? '14px'};
  line-height: ${({kind}) => lineHeights[kind] ?? '20px'};
  font-weight: 400;
`;
