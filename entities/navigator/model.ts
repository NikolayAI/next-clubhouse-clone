import {createGate} from 'effector-react';

const NavigatorGate = createGate();
const $navigator = NavigatorGate.state.map((router) => router);

export const events = {
  NavigatorGate,
};

export const data = {
  $navigator,
};