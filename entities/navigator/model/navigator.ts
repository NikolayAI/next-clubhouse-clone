import {createEvent, sample} from 'effector';
import {createGate} from 'effector-react';
import {NextRouter} from 'next/router';

const NavigatorGate = createGate<NextRouter>();
const pushToThePath = createEvent<string>();
const $navigator = NavigatorGate.state.map((router) => router);
$navigator.watch(data => console.log('nav: ', data))

sample({
  clock: pushToThePath,
  source: $navigator,
  fn: (navigator, path) => navigator.push(path)
})

export const events = {
  NavigatorGate,
  pushToThePath,
};

export const stores = {
  $navigator,
};
