import { createEvent, sample } from 'effector/compat';
import { createGate } from 'effector-react';
import { NextRouter } from 'next/router';

const NavigatorGate = createGate<NextRouter>();
const pushToThePath = createEvent<string>();
const reloadPath = createEvent();
const $navigator = NavigatorGate.state.map((router) => router);
$navigator.watch((data) => console.log('nav: ', data));

sample({
  clock: pushToThePath,
  source: $navigator,
  fn: (navigator, path) => navigator.push(path),
});

sample({
  clock: reloadPath,
  source: $navigator,
  fn: (navigator, path) => navigator.reload(),
});

export {
  $navigator,
  NavigatorGate,
  pushToThePath,
  reloadPath,
};
