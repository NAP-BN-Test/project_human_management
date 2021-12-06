/* eslint-disable dot-notation */
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

function func_approval_request_first(request: string) {
  return {type: constants.APPROVAL_REQUEST_FIRST, request: request};
}

function func_approval_request_second(request: string) {
  return {type: constants.APPROVAL_REQUEST_SECOND, request: request};
}

function func_refuse_first_approval(request: string) {
  return {type: constants.REFUSE_FIRST_APPROVAL, request: request};
}

function func_refuse_second_approval(request: string) {
  return {type: constants.REFUSE_SECOND_APPROVAL, request: request};
}

function func_payorder(request: string) {
  return {type: constants.PAYORDER, request: request};
}

function func_approval_employee_accountant(request: string) {
  return {type: constants.APPROVAL_EMPLOYEE_ACCOUNTANT, request: request};
}

function func_approval_employee_leader(request: string) {
  return {type: constants.APPROVAL_EMPLOYEE_LEADER, request: request};
}

function func_refuse_employee_accountant(request: string) {
  return {type: constants.REFUSE_EMPLOYEE_ACCOUNTANT, request: request};
}

function func_refuse_employee_leader(request: string) {
  return {type: constants.REFUSE_EMPLOYEE_LEADER, request: request};
}

var userInfo = {
  id: 0,
  token: '',
};
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
        userInfo.id = res.obj.id;
        userInfo.token = res.token;
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
      id: userInfo.id,
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

function act_approval_request_first(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.approval_request_first(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_approval_request_first(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_approval_request_second(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.approval_request_second(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_approval_request_second(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_refuse_first_approval(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.refuse_first_approval(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_refuse_first_approval(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_refuse_second_approval(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.refuse_second_approval(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_refuse_second_approval(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_get_payorder() {
  return (dispatch: any) => {
    let body = {
      id: userInfo.id,
    };
    Services.get_list_payorder(body).then((res) => {
      if (res.status == '1') {
        let request = res.array;
        dispatch(func_payorder(request));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_approval_employee_accountant(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.approval_employee_accountant(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_approval_employee_accountant(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_approval_employee_leader(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.approval_employee_leader(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_approval_employee_leader(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_refuse_employee_accountant(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.refuse_employee_accountant(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_refuse_employee_accountant(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

function act_refuse_employee_leader(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      token: userInfo.token,
    };
    Services.refuse_employee_leader(body).then((res: any) => {
      if (res.data.status == '1') {
        dispatch(func_refuse_employee_leader(res));
        dispatch(act_alert_error(res.data.message));
      } else {
        dispatch(act_alert_error('empty'));
      }
    });
  };
}

export const Action = {
  act_login,
  act_get_requestshopping,
  act_approval_request_first,
  act_approval_request_second,
  act_refuse_first_approval,
  act_refuse_second_approval,
  act_get_payorder,
  func_approval_employee_accountant,
  func_approval_employee_leader,
  func_refuse_employee_accountant,
  func_refuse_employee_leader,
  act_approval_employee_accountant,
  act_approval_employee_leader,
  act_refuse_employee_accountant,
  act_refuse_employee_leader,
};
