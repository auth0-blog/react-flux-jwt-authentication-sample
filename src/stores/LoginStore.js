import AppDispatcher from '../dispatchers/AppDispatcher';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';

var _user = null;
class LoginStore extends BaseStore {
  get user() {
    return _user;
  }

  isLoggedIn() {
    return !!_user;
  }
}

let _loginStore = new LoginStore();
export default _loginStore;

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case USER_LOGGED_IN:
      let jwt = action.jwt;
      _user = jwt_decode(jwt);
      _loginStore.emitChange();
      break;
    case USER_LOGGED_OUT:
      _user = null;
      _loginStore.emitChange();
      break;
    default:
      break;
  };
});
