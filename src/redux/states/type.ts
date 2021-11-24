/* eslint-disable prettier/prettier */
//type object
export interface Server {
  ip: string;
  dbName: string;
}

export interface User {
  id: number;
  userName: string;
  passWord: string;
}

export interface Alert {
  type: string;
  message: string;
}

export interface Container {
  id: number;
  parking_name: string;
  id_dieuphoi: number;
  ma_chuyen: string;
  image_salan: string;
  uri_salan: string;
  no_cont: string;
  no_seal: string;
  statusVanChuyen: string;
}

export interface RequestSh {
  id: number;
  departmentName: string;
  staffName: string;
  requireDate: string;
  amount: number;
  status: string;
  nameAsset: string;
  reason: string;
  arrayTaiSanApp: any[];
}

export type toggleCheckIn = (container: Container) => void;
