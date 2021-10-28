import React from 'react';

export interface IBadgeComponent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  checked?: boolean;
  iconUrl?: string;
  className?: string;
}