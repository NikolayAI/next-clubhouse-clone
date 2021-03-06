import { createEvent } from 'effector/compat';

export const goToHome = createEvent<void>();
export const goToEnterName = createEvent<void>();
export const goToEnterInfo = createEvent<void>();
export const goToChoosePhoto = createEvent<void>();
export const goToEnterPhone = createEvent<void>();
export const goToEnterCode = createEvent<void>();
export const goToRooms = createEvent<void>();
export const goToRoom = createEvent<{ id: string }>();
export const goToProfile = createEvent<void>();
