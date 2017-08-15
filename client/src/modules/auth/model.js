/*
state.auth = {
  authenticated: Boolean,
  userId: Number,
  error: String
}
*/

export const getAuthenticated = auth => auth.authenticated;

export const getUserId = auth => auth.userId;

export const getError = auth => auth.error;
