/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {URL, secretKey} from '../asset/data/data';

export const Services = {
  login,
  get_list_request_shopping,
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
    .post(`${URL}/qlnb/get_list_tbl_yeucaumuasam`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
