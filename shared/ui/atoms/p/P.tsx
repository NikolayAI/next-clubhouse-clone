import React from 'react';
import styled from 'styled-components';

import { IPTag } from './types';
import { fontSizes, lineHeights } from './constants';

export const PTag: React.FC<IPTag> = ({
  kind,
  className,
  children,
  ...props
}) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export const P = styled(PTag)`
  font-size: ${({ kind }) => fontSizes[kind]};
  line-height: ${({ kind }) => lineHeights[kind]};
  font-weight: 400;
`;
