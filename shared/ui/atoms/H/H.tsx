import React from 'react';
import styled from 'styled-components';

import {IHTag} from './types';

const HTag: React.FC<IHTag> = ({
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

  return titles[kind];
};

export const H = styled(HTag)`
  font-weight: 700;
  
  h1 {
    font-size: 36px;
    line-height: 50px;
  }
  
  h2 {
    font-size: 26px;
    line-height: 36px;
  }
  
  h3 {
    font-size: 22px;
    line-height: 30px;
  }
  
  h4 {
    font-size: 18px;
    line-height: 24px;
  }
  
  h4 {
    font-size: 16px;
    line-height: 22px;
  }
`


