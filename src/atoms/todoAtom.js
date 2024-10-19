import { atom } from 'recoil';

export const todoAtom = atom({
  key: 'todoAtom', // unique ID (with respect to other atoms/selectors)
  default: [
    { id: 1, text: 'Learn Recoil', user: 'Laeli NurC' },
    { id: 2, text: 'Build a Todo App', user: 'Minatozaki' },
    { id: 3, text: 'Understand Global State', user: 'Sana' }
  ], // initial state
});
