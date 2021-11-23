import React from 'react';
import styled from 'styled-components';

import {IButtonTag} from './types';
import {
  alignContents,
  backgroundColors,
  borders,
  colors,
  displays,
  hoverOpacity,
  justifyContents,
  paddings,
  widths,
} from './constants';
import {Spinner} from '../spinner';

const ButtonTag: React.FC<IButtonTag> = ({
  kind,
  text,
  iconUrl,
  iconAlt,
  leadIconUrl,
  leadIconAlt,
  suffixIconUrl,
  suffixIconAlt,
  isLoading,
  loadingDescription,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`button ${className} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      {...props}
    >
      {leadIconUrl && <img
          className="button-lead-icon"
          src={leadIconUrl}
          alt={leadIconAlt}
          height={12}
          width={11}
      />}
      {!isLoading && text && <span className="button-text">{text}</span>}
      {isLoading && loadingDescription && (
        <span className="button-description">{loadingDescription}</span>
      )}
      {iconUrl && <img
          className="button-icon"
          src={iconUrl}
          alt={iconAlt}
          height={18}
          width={18}
      />}
      {!isLoading && suffixIconUrl && <img
          className="button-suffix-icon"
          src={suffixIconUrl}
          alt={suffixIconAlt}
          height={12}
          width={11}
      />}
      {isLoading && <Spinner height={12} width={12}/>}
    </button>
  );
};

export const Button = styled(ButtonTag)`
  & {
    display: ${({iconUrl}) => displays[`${!!iconUrl}`]};
    justify-content: ${({iconUrl}) => justifyContents[`${!!iconUrl}`]};
    align-content: ${({iconUrl}) => alignContents[`${!!iconUrl}`]};
    height: 48px;
    width: ${({iconUrl}) => widths[`${!!iconUrl}`]};
    padding: ${({text}) => paddings[`${!!text}`]};
    color: ${({kind}) => colors[kind]};
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    border: ${({kind}) => borders[kind]};
    border-radius: 30px;
    background-color: ${({kind}) => backgroundColors[kind]};
    cursor: pointer;
  }

  &:hover {
    opacity: ${({disabled}) => hoverOpacity[`${disabled}`]};
  }

  &.disabled {
    background-color: #DAD6CA;
    cursor: not-allowed;
  }

  .button-text,
  .button-description {
    margin: 0 8px;
  }
`;
