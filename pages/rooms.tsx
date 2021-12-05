import React from 'react';
import { InferGetServerSidePropsType } from 'next';

import { RoomsPage } from '../applicationPages';
import { request } from '../shared/api';

// TODO need to set page props type
const Rooms = ({
  rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <RoomsPage rooms={rooms} />;
};

export const getServerSideProps = async () => {
  try {
    const { data } = await request.get('/rooms.json');
    return {
      props: {
        rooms: data,
      },
    };
  } catch (e) {
    return {
      props: {
        rooms: [],
      },
    };
  }
};

export default Rooms;
