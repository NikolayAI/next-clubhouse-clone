import React from 'react';
import styled from 'styled-components';

import {IButtonTag} from './types';
import {backgroundColors, borders, colors} from './constants';
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
    <button className={`button ${className}`} disabled={disabled} {...props}>
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
    display: ${({iconUrl}) => iconUrl && 'grid'};
    justify-content: ${({iconUrl}) => iconUrl && 'center'};
    align-content: ${({iconUrl}) => iconUrl && 'center'};
    height: 48px;
    width: ${({iconUrl}) => iconUrl ? '48px' : 'max-content'};
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
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  }

  &:hover {
    opacity: ${({disabled}) => disabled ? 1 : 0.9};
  }

  .button-text,
  .button-description {
    margin: 0 8px;
  }
`;
