import React from 'react';
import styled from 'styled-components';
import { ICardComponent } from './types';
import { paddings, widths } from './constants';

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
  & {
    height: max-content;
    width: ${({ fullWidth }) => widths[`${fullWidth}`]};
    padding: ${({ kind }) => paddings[kind]};
    background-color: #ffffff;
    border: 1px solid #e8e3d7;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }
`;
