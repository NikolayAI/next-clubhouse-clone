import React from 'react';
import styled from 'styled-components';
import {ICardComponent} from './types';
import {paddings} from './constants';

const CardComponent: React.FC<ICardComponent> = ({
  className,
  fullWidth,
  children,
  ...props
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Card = styled(CardComponent)`
  &.card {
    height: max-content;
    width: ${({fullWidth}) => fullWidth ? 'auto' : 'max-content'};
    padding: ${({kind}) => paddings[kind]};
    background-color: #FFFFFF;
    border: 1px solid #E8E3D7;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 20px;  
  }
`