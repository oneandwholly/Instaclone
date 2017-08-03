//import { createSelector } from 'reselect';
//import _ from 'lodash';
import { NAME } from './constants';
// import { filterActive, filterCompleted } from './model';

export const getAll = state => state[NAME];

export const getAuthenticated = state => state[NAME].authenticated;

export const getErrorMessage = state => state[NAME].error;

export const getCurrentUserId = state => {
  if(state[NAME].currentUserId)
    return state[NAME].currentUserId;
  else
    return 0;
}

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
