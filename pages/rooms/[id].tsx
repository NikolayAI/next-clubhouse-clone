import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { allSettled, fork, serialize } from 'effector/compat';

import { RoomPage } from '../../applicationPages';
import { roomsModel } from '../../entities/rooms';

const Room = () => {
  return <RoomPage />;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const scope = fork();
  await allSettled(roomsModel.effects.getRoomsFx, { scope });
  await allSettled(roomsModel.events.setCurrentRoomId, {
    scope,
    params: context.query?.id,
  });
  return { props: { initialState: serialize(scope) } };
};

export default Room;
