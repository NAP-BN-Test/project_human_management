/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {URL, secretKey} from '../asset/data/data';

export const Services = {
  login,
  get_list_request_shopping,
  approval_request_first,
  approval_request_second,
  refuse_first_approval,
  refuse_second_approval,
};

function login(req: any) {
  let body = {
    userName: req.username,
    password: req.password,
  };
  return axios
    .post(`${URL}/qlnb/login`, body)
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => console.log(err));
}
function get_list_request_shopping(req: any) {
  let body = {
    ip: req.ip,
    dbName: req.dbName,
    secretKey: req.secretKey,
    userID: req.id,
    type: 'approval',
  };
  return axios
    .post(`${URL}/qlnb/get_list_tbl_yeucaumuasam_app`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function approval_request_first(req: any) {
  let body = {
    ip: req.ip,
    dbName: req.dbName,
    secretKey: req.secretKey,
    userID: req.id,
    id: req.id,
  };
  return axios
    .post(`${URL}/qlnb/approval_first_approver`, body, {
      headers: {
        Authorization: `${req.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

function approval_request_second(req: any) {
  let body = {
    ip: req.ip,
    dbName: req.dbName,
    secretKey: req.secretKey,
    userID: req.id,
    id: req.id,
  };
  return axios
    .post(`${URL}/qlnb/approval_second_approver`, body, {
      headers: {
        Authorization: `${req.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

function refuse_first_approval(req: any) {
  let body = {
    ip: req.ip,
    dbName: req.dbName,
    secretKey: req.secretKey,
    userID: req.id,
    id: req.id,
  };
  return axios
    .post(`${URL}/qlnb/refuse_first_approver`, body, {
      headers: {
        Authorization: `${req.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

function refuse_second_approval(req: any) {
  let body = {
    ip: req.ip,
    dbName: req.dbName,
    secretKey: req.secretKey,
    userID: req.id,
    id: req.id,
  };
  return axios
    .post(`${URL}/qlnb/refuse_second_approver`, body, {
      headers: {
        Authorization: `${req.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}
