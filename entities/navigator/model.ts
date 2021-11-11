import {createGate} from 'effector-react';
import {NextRouter} from 'next/router';

const NavigatorGate = createGate<NextRouter>();
const $navigator = NavigatorGate.state.map((router) => router);

export const events = {
  NavigatorGate,
};

export const data = {
  $navigator,
};