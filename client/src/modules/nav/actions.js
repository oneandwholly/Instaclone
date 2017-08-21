import * as n from './actionTypes';
import createHistory from 'history/createBrowserHistory';

export const selectNavigationItem = (name) => {
  console.log('running')
  return (dispatch) => {
    dispatch({
      type: n.SET_ACTIVE,
      payload: name
    });

  }
}

export const selectExplore = () => {

}

export const selectCreate = () => {
  return (dispatch) => {
    const history = createHistory();
    history.push('/create');
  }
}

export const selectActivity = () => {

}

export const selectProfileEdit = () => {

}

export const selectAccountSettings = () => {

}

export const selectDiscoverPeople = () => {

}

export const selectMoreOptions = () => {

}
