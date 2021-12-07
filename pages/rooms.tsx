import React from 'react';
import { allSettled, fork, serialize } from 'effector/compat';

import { RoomsPage } from '../applicationPages';
import { roomsModel } from '../entities/rooms';

const Rooms = () => {
  return <RoomsPage />;
};

export const getServerSideProps = async () => {
  const scope = fork();
  await allSettled(roomsModel.effects.getRoomsFx, { scope });
  return { props: { initialState: serialize(scope) } };
};

export default Rooms;
