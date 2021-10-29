import React from 'react';
import styled from 'styled-components';

import {IButtonTag} from './types';
import {backgroundColors, borders, colors} from './constants';

const ButtonTag: React.FC<IButtonTag> = ({
  kind,
  text,
  iconUrl,
  iconAlt,
  leadIconUrl,
  leadIconAlt,
  suffixIconUrl,
  suffixIconAlt,
  className,
  disabled,
  ...props
}) => {
  return (
    <button className={`button ${className}`} disabled={disabled} {...props}>
      {leadIconUrl && <img
          className="button-before-icon"
          src={leadIconUrl}
          alt={leadIconAlt}
          height={12}
          width={11}
      />}
      {text && <span className="button-text">{text}</span>}
      {iconUrl && <img
          className="button-icon"
          src={iconUrl}
          alt={iconAlt}
          height={18}
          width={18}
      />}
      {suffixIconUrl && <img
          className="button-suffix-icon"
          src={suffixIconUrl}
          alt={suffixIconAlt}
          height={12}
          width={11}
      />}
    </button>
  );
};

export const Button = styled(ButtonTag)`
  &.button {
    display: ${({iconUrl}) => iconUrl && 'grid'};
    justify-content: ${({iconUrl}) => iconUrl && 'center'};
    align-content: ${({iconUrl}) => iconUrl && 'center'};
    height: 48px;
    width: ${({iconUrl}) => iconUrl && '48px'};
    padding: ${({text}) => text && '0 24px'};
    color: ${({kind}) => colors[kind]};
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    border: ${({kind}) => borders[kind]};
    border-radius: 30px;
    background-color: ${({
      disabled,
      kind,
    }) => disabled ? '#DAD6CA' : backgroundColors[kind]};
    cursor: pointer;
  }

  .button-text {
    margin: 0 8px;
  }
`;
