import React from 'react';

type AvatarKindType = 'sm' | 'md' | 'lg'

export interface IAvatarComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  kind: AvatarKindType;
  imageUrl?: string;
  userName?: string;
  className?: string;
}