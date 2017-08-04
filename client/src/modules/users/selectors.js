// import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { getByIdProp, getProfileUserIdProp } from './model';

export const selectAll = state => state[NAME];

export const selectAllUsers = _.flow(selectAll, getByIdProp);

export const getProfileUserId = _.flow(selectAll, getProfileUserIdProp);

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
