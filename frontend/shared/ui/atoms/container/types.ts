import React from 'react';
import { Property } from 'csstype';
import GridAutoFlow = Property.GridAutoFlow;
import JustifyContent = Property.AlignItems;
import AlignItems = Property.AlignItems;
import TextAlign = Property.TextAlign;

type MorePositionsType = 'space-around' | 'space-between' | 'space-evenly';

export interface IContainerComponent
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  gridAutoFlow?: GridAutoFlow;
  justifyContent?: JustifyContent | MorePositionsType;
  alignItems?: AlignItems;
  textAlign?: TextAlign;
  className?: string;
}
