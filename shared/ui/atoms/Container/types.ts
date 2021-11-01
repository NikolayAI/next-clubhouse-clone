import React from 'react';
import {Property} from 'csstype';
import TextAlign = Property.TextAlign;
import GridAutoFlow = Property.Grid;
import JustifyContent = Property.Grid;
import AlignItems = Property.Grid;

export interface IContainerComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gridAutoFlow?: GridAutoFlow;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  textAlign?: TextAlign;
  className?: string;
}