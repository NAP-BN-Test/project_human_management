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
};

const initState = [item_request_shopping];

const rdc_request_shopping = (state = initState, action: any) => {
  switch (action.type) {
    case REQUEST_SHOPPING:
      console.log('action', action.request);

      return action.request.map((shopping: any) => {
        return {
          id: shopping.id,
          departmentName: shopping.departmentName,
          staffName: shopping.staffName,
          requireDate: shopping.requireDate,
          amount: shopping.amount,
          status: shopping.status,
          nameAsset: shopping.nameAsset,
          reason: shopping.reason,
        };
      });
    default:
      return state;
  }
};

export default rdc_request_shopping;
