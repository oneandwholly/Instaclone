//import { createSelector } from 'reselect';
import { NAME } from './constants';

export const getAll = state => state[NAME];

export const getActive = state => state[NAME].active;
