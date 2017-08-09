//import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { getByIdProp } from './model';

export const selectAll = state => state[NAME];

export const selectAllPhotos = _.flow(selectAll, getByIdProp);



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
