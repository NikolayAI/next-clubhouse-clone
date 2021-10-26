import React from 'react';
import styled from 'styled-components';

import {IButtonTag} from './types';
import {backgroundColors, borders, colors} from './constants';

const ButtonTag: React.FC<IButtonTag> = ({
  kind,
  text,
  icon,
  leadIcon,
  suffixIcon,
  className,
  disabled,
  ...props
}) => {
  return (
    <button className={className} disabled={disabled} {...props}>
      {leadIcon && <span className="button-before-icon">{leadIcon}</span>}
      {text && <span className="button-text">{text}</span>}
      {icon && <span className="button-icon">{icon}</span>}
      {suffixIcon && <span className="button-icon">{suffixIcon}</span>}
    </button>
  );
};

export const Button = styled(ButtonTag)`
  height: 48px;
  width: ${({icon}) => icon && '48px'};
  padding: ${({text}) => text && '0 24px'};
  color: ${({kind}) => colors[kind]};
  font-family: inherit;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border: ${({kind}) => borders[kind]};
  border-radius: 30px;
  background-color: ${({
    disabled,
    kind,
  }) => disabled ? '#DAD6CA' : backgroundColors[kind]};
  
  .button-text {
    margin: 0 8px;
  }
`;
