import React from 'react';
import styled from 'styled-components';

import {IContainerComponent} from './types';

const ContainerComponent: React.FC<IContainerComponent> = ({
  gridAutoFlow,
  justifyContent,
  alignItems,
  textAlign,
  className,
  children,
  ...props
}) => {
  return <div className={`container ${className}`} {...props}>{children}</div>;
};

export const Container = styled(ContainerComponent)`
  & {
    display: grid;
    grid-auto-flow: ${({gridAutoFlow}) => gridAutoFlow ?? 'column'};
    justify-content: ${({justifyContent}) => justifyContent ?? 'center'};
    align-items: ${({alignItems}) => alignItems ?? 'center'};
    text-align: ${({textAlign}) => textAlign};
  }
`;