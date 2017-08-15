//import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
 import { getAuthenticated, getUserId, getError } from './model';

export const selectAll = state => state[NAME];

export const selectAuthenticated = _.flow(selectAll, getAuthenticated);

export const selectErrorMessage = _.flow(selectAll, getError);

export const selectUserId = _.flow(selectAll, getUserId);

// export const getCompleted = _.compose(filterCompleted, getAll);
//
// export const getActive = _.compose(filterActive, getAll);
//
// export const getCounts = createSelector(
//   getAll,
//   getCompleted,
//   getActive,
//   (allTodos, completedTodos, activeTodos) => ({
//     all: allTodos.length,
//     completed: completedTodos.length,
//     active: activeTodos.length
//   })
// );
