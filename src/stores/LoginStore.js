import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super(this._registerToActions.bind(this));
    this._user = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case USER_LOGGED_IN:
        let jwt = action.jwt;
        this._user = jwt_decode(jwt);
        this.emitChange();
        break;
      case USER_LOGGED_OUT:
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();


