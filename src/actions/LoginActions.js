import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  userLoggedIn: (jwt) => {
    RouterContainer.get().transitionTo('/');
    localStorage.setItem('jwt', jwt);
    AppDispatcher.dispatch({
      actionType: USER_LOGGED_IN,
      jwt: jwt
    });
  },
  userLoggedOut: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt', jwt);
    AppDispatcher.dispatch({
      actionType: USER_LOGGED_OUT
    });
  }
}
