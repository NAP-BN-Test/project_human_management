/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import {REQUEST_SHOPPING} from '../constants';

const item_request_shopping = {
  id: null || 0,
  departmentName: '',
  staffName: '',
  requireDate: '',
  amount: null || 0,
  status: '',
  nameAsset: '',
  reason: '',
  arrayTaiSanApp: [],
};

const initState = [item_request_shopping];

const rdc_request_shopping = (state = initState, action: any) => {
  switch (action.type) {
    case REQUEST_SHOPPING:
      return action.request.map((shopping: any) => {
        return {
          id: shopping.id,
          departmentName: shopping.namePhongBan,
          staffName: shopping.nameIDNhanVien,
          requireDate: shopping.requireDate,
          amount: shopping.amount,
          status: shopping.status,
          nameAsset: shopping.nameAsset,
          reason: shopping.reason,
          arrayTaiSanApp: JSON.parse(shopping.arrayTaiSanApp),
        };
      });
    default:
      return state;
  }
};

export default rdc_request_shopping;
