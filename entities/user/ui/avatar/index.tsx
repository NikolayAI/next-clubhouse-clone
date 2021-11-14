import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {IAvatarComponent} from './types';
import {borderRadius, sizes} from './constants';
import {Span} from '../../../../shared/ui';

const AvatarComponent: React.FC<IAvatarComponent> = ({
  kind,
  imageUrl,
  userName,
  className,
  ...props
}) => {
  return (
    <div className={`avatar ${className}`} {...props}>
      <div className="avatar-image-wrapper">
        {imageUrl && <Image
          className="avatar-image"
          src={imageUrl}
          alt="user avatar"
          height={sizes[kind]}
          width={sizes[kind]}
          unoptimized
        />}
      </div>
      {userName && (
        <Span className="avatar-user-name" kind="sm">
          {userName}
        </Span>
      )}
    </div>
  );
};

export const Avatar = styled(AvatarComponent)`
  &.avatar {
    width: ${({kind}) => sizes[kind]};
  }
  .avatar-image-wrapper {
    height: ${({kind}) => sizes[kind]};
    width: 100%;
    border-radius: ${({kind}) => borderRadius[kind]};
    background-color: #E0E0E0;
    overflow: hidden;
  }

  .avatar-image {
    object-fit: cover;
  }

  .avatar-user-name {
    display: block;
    margin-top: 18px;
    text-align: center;
  }
`;
