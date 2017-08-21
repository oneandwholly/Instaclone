export const setNavToHome = () => {
  return (dispatch) => {
    dispatch({
      type: 'nav/SET_ACTIVE',
      payload: 'home'
    })
  }
}
