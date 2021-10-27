import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {Span} from '../../atoms';
import {IAvatarComponent} from './types';
import {sizes} from './constants';

const AvatarComponent: React.FC<IAvatarComponent> = ({
  kind,
  src,
  userName,
  className,
  ...props
}) => {
  return (
    <div className={`user-avatar ${className}`}>
      <div className="user-image-wrapper">
        <Image
          className="user-image"
          src={src}
          alt="user avatar"
          height={sizes[kind]}
          width={sizes[kind]}
          {...props}
        />
      </div>
      {userName && <Span className="user-name" kind="sm">{userName}</Span>}
    </div>
  );
};

export const Avatar = styled(AvatarComponent)`
  .user-image-wrapper {
    height: ${({kind}) => sizes[kind]};
    width: ${({kind}) => sizes[kind]};
    border-radius: 35px;
    overflow: hidden;
  }

  .user-image {
    object-fit: cover;
  }

  .user-name {
    display: block;
    margin-top: 18px;
  }
`;
