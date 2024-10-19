import { atom } from 'recoil';

export const voteAtom = atom({
  key: 'voteAtom',
  default: {} // initial state is an empty object, where we'll track votes per todo
});
