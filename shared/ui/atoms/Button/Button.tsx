import React from 'react';
import styled from 'styled-components';

import {IButtonTag} from './types';
import {backgroundColors, borders, colors} from './constants';

const ButtonTag: React.FC<IButtonTag> = ({
  kind,
  text,
  icon,
  iconOnly,
  iconBefore,
  className,
  disabled,
  ...props
}) => {
  return (
    <button className={className} disabled={disabled} {...props}>
      {iconBefore && <span className="button-before-icon">{icon}</span>}
      {text && <span className="button-text">{text}</span>}
      {!iconBefore && icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export const Button = styled(ButtonTag)`
  height: 48px;
  width: ${({text}) => !text && '48px'};
  border-radius: 30px;
  padding: ${({text}) => text && '0 24px'};
  color: ${({kind}) => colors[kind]};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;

  .button-text {
    margin: 0 8px;
  }

  background-color: ${({disabled, kind}) => {
    if (disabled) return '#DAD6CA';
    return backgroundColors[kind]
  }};
  border: ${({kind}) => borders[kind]};
`;
