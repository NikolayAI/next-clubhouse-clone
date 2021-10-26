import React from 'react';
import styled from 'styled-components';
import {IInputTag} from './types';
import {maxLengths, paddings, widths} from './constants';

const InputTag: React.FC<IInputTag> = ({kind, ...props}) => {
  return <input maxLength={maxLengths[`${kind}`]} {...props}/>
};

export const Input = styled(InputTag)`
  height: 64px;
  width: ${({kind}) => widths[`${kind}`]};
  padding: ${({kind}) => paddings[`${kind}`]};
  font-size: 28px;
  text-align: center;
  border: 1px solid #E3E3E3;
  border-radius: 20px;
`;
