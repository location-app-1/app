import { atom } from 'jotai';

export const themeAtom = atom<'light' | 'dark' | 'inherit'>('light');