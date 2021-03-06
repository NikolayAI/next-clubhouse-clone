import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { IButtonTag } from './types';
import {
  backgroundColors,
  borders,
  colors,
  hoverOpacity,
  justifyContents,
  paddings,
  widths,
} from './constants';
import { Spinner } from '../spinner';

const ButtonTag: React.FC<IButtonTag> = ({
  kind,
  text,
  iconUrl,
  iconAlt,
  iconHeight,
  iconWidth,
  leadIconUrl,
  leadIconAlt,
  leadIconHeight,
  leadIconWidth,
  suffixIconUrl,
  suffixIconAlt,
  suffixIconHeight,
  suffixIconWidth,
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
      {leadIconUrl && (
        <Image
          className="button-lead-icon"
          src={leadIconUrl}
          alt={leadIconAlt}
          height={leadIconHeight ?? 12}
          width={leadIconWidth ?? 12}
        />
      )}
      {!isLoading && text && <span className="button-text">{text}</span>}
      {isLoading && loadingDescription && (
        <span className="button-description">{loadingDescription}</span>
      )}
      {iconUrl && (
        <Image
          className="button-icon"
          src={iconUrl}
          alt={iconAlt}
          height={iconHeight ?? 18}
          width={iconWidth ?? 18}
        />
      )}
      {!isLoading && suffixIconUrl && (
        <Image
          className="button-suffix-icon"
          src={suffixIconUrl}
          alt={suffixIconAlt}
          height={suffixIconHeight ?? 12}
          width={suffixIconWidth ?? 12}
        />
      )}
      {isLoading && <Spinner height={12} width={12} />}
    </button>
  );
};

export const Button = styled(ButtonTag)`
  & {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: ${({ iconUrl }) => justifyContents[`${!!iconUrl}`]};
    height: 48px;
    width: ${({ iconUrl }) => widths[`${!!iconUrl}`]};
    padding: ${({ text }) => paddings[`${!!text}`]};
    color: ${({ kind }) => colors[kind]};
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    border: ${({ kind }) => borders[kind]};
    border-radius: 30px;
    background-color: ${({ kind }) => backgroundColors[kind]};
    cursor: pointer;
  }

  &:hover {
    opacity: ${({ disabled }) => hoverOpacity[`${disabled}`]};
  }

  &.disabled {
    background-color: #dad6ca;
    cursor: not-allowed;
  }

  .button-text,
  .button-description {
    margin: 0 8px;
  }
`;
