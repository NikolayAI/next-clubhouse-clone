import React from 'react';
import styled from 'styled-components';

import { IInputTag } from './types';
import { paddings, textAligns, widths } from './constants';

const InputTag: React.FC<IInputTag> = ({
  kind,
  value,
  className,
  ...props
}) => {
  return <input className={className} value={value} {...props} />;
};

export const Input = styled(InputTag)`
  height: 64px;
  width: ${({ kind }) => widths[`${kind}`]};
  padding: ${({ kind }) => paddings[`${kind}`]};
  font-size: 28px;
  text-align: ${({ kind }) => textAligns[`${kind}`]};
  border: 1px solid #e3e3e3;
  border-radius: 20px;
`;
