import React from 'react';
import styled from 'styled-components';

import {IHTag} from './types';
import {fontSizes, lineHeights} from './constants';

const HTag: React.FC<IHTag> = ({
  tag,
  kind,
  className,
  children,
  ...props
}) => {
  const titles = {
    'h1': <h1 className={className} {...props}>{children}</h1>,
    'h2': <h2 className={className} {...props}>{children}</h2>,
    'h3': <h3 className={className} {...props}>{children}</h3>,
    'h4': <h4 className={className} {...props}>{children}</h4>,
    'h5': <h5 className={className} {...props}>{children}</h5>,
  }

  return titles[tag];
};

export const H = styled(HTag)`
  font-size: ${({kind}) => fontSizes[kind]};
  line-height: ${({kind}) => lineHeights[kind]};
`


