import {ImageProps} from 'next/image';

type AvatarKindType = 'sm' | 'md' | 'lg'

export interface IAvatarComponent extends ImageProps {
  kind: AvatarKindType;
  src: string;
  userName?: string;
  className?: string;
}