import React from 'react';
import styled from 'styled-components';
import {IPageWrapperComponent} from './types';

const PageWrapperComponent: React.FC<IPageWrapperComponent> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`page-wrapper ${className}`} {...props}>{children}</div>
  );
};

export const PageWrapper = styled(PageWrapperComponent)`
  &.page-wrapper {
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }
`;