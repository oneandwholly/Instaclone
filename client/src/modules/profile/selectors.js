//import { createSelector } from 'reselect';
//import _ from 'lodash';
import { NAME } from './constants';
// import { filterActive, filterCompleted } from './model';

export const selectAll = state => state[NAME];

export const selectUsername = state => state[NAME].username;

export const selectUserId = state => state[NAME].userId;
