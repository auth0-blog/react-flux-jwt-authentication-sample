import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  userLoggedIn: (jwt) => {
    RouterContainer.get().transitionTo('/');
    AppDispatcher.dispatch({
      actionType: USER_LOGGED_IN,
      jwt: jwt
    });
  },
  userLoggedOut: () => {
    RouterContainer.get().transitionTo('/login');
    AppDispatcher.dispatch({
      actionType: USER_LOGGED_OUT
    });
  }
}
