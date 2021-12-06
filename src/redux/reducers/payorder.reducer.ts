/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import {PAYORDER} from '../constants';

const item_payorder = {
  id: null || 0,
  departmentName: '',
  nameNhanVien: '',
  objectName: '',
  reason: '',
  money: '',
  typeMoney: '',
  trangThaiPheDuyetLD: '',
  trangThaiPheDuyetKT: '',
};

const initState = [item_payorder];

const rdc_payorder = (state = initState, action: any) => {
  console.log('ACTION', action);

  switch (action.type) {
    case PAYORDER:
      return action.request.map((payorder: any) => {
        return {
          id: payorder.id,
          departmentName: payorder.departmentName,
          nameNhanVien: payorder.nameNhanVien,
          objectName: payorder.objectName,
          reason: payorder.reason,
          money: payorder.cost,
          typeMoney: payorder.nameCurrency,
          trangThaiPheDuyetLD: payorder.trangThaiPheDuyetLD,
          trangThaiPheDuyetKT: payorder.trangThaiPheDuyetKT,
        };
      });
    default:
      return state;
  }
};

export default rdc_payorder;
