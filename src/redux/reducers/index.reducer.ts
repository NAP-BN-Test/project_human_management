/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import rdc_alert from './alert.reducer';
import rdc_login from './login.reducer';
import rdc_payorder from './payorder.reducer';
import rdc_request_shopping from './request.reducer';

export const rootReducer = combineReducers({
  login: rdc_login,
  alerts: rdc_alert,
  request_shopping: rdc_request_shopping,
  payorder: rdc_payorder,
});

export type RootState = ReturnType<typeof rootReducer>;
