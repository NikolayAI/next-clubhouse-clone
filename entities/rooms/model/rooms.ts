import {
  combine,
  createEffect,
  createEvent,
  createStore,
} from 'effector/compat';

import { RoomsStoreType } from './types';
import { API, IRoomsResponse } from '../../../shared/api';

const $rooms = createStore<RoomsStoreType>({});
const $currentRoomId = createStore<string>('');

const setCurrentRoomId = createEvent<string>();

const getRoomsFx = createEffect<void, IRoomsResponse[]>();

getRoomsFx.use(async () => await API.getRooms());

$rooms.on(getRoomsFx.doneData, (_, rooms) => {
  return rooms.reduce((acc: RoomsStoreType, room) => {
    return { ...acc, [room?.id]: room };
  }, {});
});
$currentRoomId.on(setCurrentRoomId, (_, data) => data);

const $roomsIds = $rooms.map((rooms) => Object.keys(rooms));

const $currentRoom = combine(
  $rooms,
  $currentRoomId,
  (rooms, currentRoomId) => rooms[currentRoomId]
);

export const events = {
  setCurrentRoomId,
};

export const effects = {
  getRoomsFx,
};

export const stores = {
  $rooms,
  $roomsIds,
  $currentRoom,
};
