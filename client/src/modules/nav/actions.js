import * as n from './actionTypes';

export const selectNavigationItem = (name) => {
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
