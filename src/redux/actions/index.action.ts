/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import {Services} from '../../services/services';
import * as constants from '../constants';
import {User} from '../states/type';

function act_alert_error(messages: string) {
  return {
    type: constants.ALERT_ERROR,
    message: messages,
  };
}
function request(user: string) {
  return {type: constants.LOGIN, user: user};
}

function success(username: string) {
  return {type: constants.ALERT_SUCCESS, message: username};
}

function func_request_shopping(request: string) {
  return {type: constants.REQUEST_SHOPPING, request: request};
}

var staffID: number;
function act_login(users: User) {
  return (dispatch: any) => {
    let body = {
      username: users.userName,
      password: users.passWord,
    };
    Services.login(body).then(async (res) => {
      if (res.status == '1') {
        await AsyncStorage.setItem('staffName', res.obj.staffName);
        await AsyncStorage.setItem('staffCode', res.obj.staffCode);
        await AsyncStorage.setItem('staffID', res.obj.id);
        staffID = res.obj.id;
        dispatch(success('Hello ' + res.obj.name));
        let user = res.obj;
        dispatch(request(user));
        Actions.Home();
      } else {
        dispatch(act_alert_error(res.message));
      }
    });
  };
}
function act_get_requestshopping() {
  return (dispatch: any) => {
    let body = {
      id: staffID,
    };
    Services.get_list_request_shopping(body).then((res) => {
      if (res.status == '1') {
        let request = res.array;
        dispatch(func_request_shopping(request));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}
export const Action = {
  act_login,
  act_get_requestshopping,
};
