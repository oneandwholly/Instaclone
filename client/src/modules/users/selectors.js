// import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { getByIdProp } from './model';

export const getAll = state => state[NAME];

export const getAllUsersById = _.flow(getAll, getByIdProp);


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
