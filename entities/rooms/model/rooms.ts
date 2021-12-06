import { createEffect, createStore } from 'effector';

import { API, IRoomsResponse } from '../../../shared/api';

const $rooms = createStore<IRoomsResponse[]>([]);

const getRoomsFx = createEffect<void, IRoomsResponse[]>();

getRoomsFx.use(async () => await API.getRooms());

$rooms.on(getRoomsFx.doneData, (_, data) => data);

export const effects = {
  getRoomsFx,
};

export const stores = {
  $rooms,
};
