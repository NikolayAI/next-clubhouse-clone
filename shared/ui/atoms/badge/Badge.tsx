import React from 'react';
import styled from 'styled-components';
import {Span} from '../span';
import {IBadgeComponent} from './types';
import {backgroundColors, borders, boxShadows, titleColors} from './constants';

const BadgeComponent: React.FC<IBadgeComponent> = ({
  title,
  checked,
  iconUrl,
  className,
  ...props
}) => {
  return (
    <div className={`badge ${className}`} {...props}>
      {iconUrl && <img
          className="badge-icon"
          src={iconUrl}
          alt="badge icon"
          height={18}
          width={18}
      />}
      <Span className="badge-title" kind="sm">{title}</Span>
    </div>
  );
};

export const Badge = styled(BadgeComponent)`
  & {
    display: grid;
    grid-template-columns: auto 1fr;
    align-content: center;
    height: 46px;
    width: min-content;
    padding: 0 20px;
    background-color: ${({checked}) => backgroundColors[`${checked}`]};
    border: ${({checked}) => borders[`${checked}`]};
    border-radius: 15px;
    box-shadow: ${({checked}) => boxShadows[`${checked}`]};
    cursor: pointer;
  }

  .badge-icon {
    object-fit: cover;
    margin-right: 8px;
  }
  
  .badge-title {
    line-height: initial;
    color: ${({checked}) => titleColors[`${checked}`]};
  }
`;