import React from 'react';
import styled from 'styled-components';

import {ISpinnerComponent} from './types';

const SpinnerComponent: React.FC<ISpinnerComponent> = ({
  className,
}) => {
  return <div className={`spinner ${className}`}/>
}

export const Spinner = styled(SpinnerComponent)`
  & {
    display: inline-block;
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
  }

  &:after {
    content: " ";
    display: block;
    width: ${({width}) => `${width * 0.7}px`};
    height: ${({height}) => `${height * 0.7}px`};
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;