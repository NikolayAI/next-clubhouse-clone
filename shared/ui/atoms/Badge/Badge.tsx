import React from 'react';
import styled from 'styled-components';
import {Span} from '../Span';
import {IBadgeComponent} from './types';

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
    background-color: ${({checked}) => checked ? '#5677AD' : '#FFFFFF'};
    border: ${({checked}) => `1px solid ${checked ? '#5677AD' : '#E8E3D7'}`};
    border-radius: 15px;
    box-shadow: ${({checked}) => checked ? 'inset 0 3px 1px rgba(0, 0, 0, 0.15)' : '0 2px 1px rgba(0, 0, 0, 0.05)'};
    cursor: pointer;
  }

  .badge-icon {
    object-fit: cover;
    margin-right: 8px;
  }
  
  .badge-title {
    line-height: initial;
    color: ${({checked}) => checked && '#FFFFFF'};
  }
`;