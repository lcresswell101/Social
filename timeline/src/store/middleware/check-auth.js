import { logOut } from "../user";

function parseToken(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (exception) {
    return null;
  }
}

export default store => next => async (action) => {
  const state = await store.getState();

  const token = state.user.user.token;
  const isLoggedIn = state.user.user.isLoggedIn;

  if (isLoggedIn) {
    const decodedToken = parseToken(token);

    if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logOut());
    }
  }

  return next(action);
}