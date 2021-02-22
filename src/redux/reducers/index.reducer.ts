import { combineReducers } from 'redux';
import rdc_alert from './alert.reducer';
import rdc_login from './login.reducer';
import rdc_request_shopping from './request.reducer';
// import rdc_register_server from './registerserver.reducer';
// import rdc_login from './login.reducer';
// import rdc_alert from './alert.reducer';
// import rdc_hientruong from './hientruong.reducer';
// import rdc_container from './container.reducer';
// import rdc_parking from './parking.reducer';
// import rdc_hientruong_checked from './hientruongchecked';

export const rootReducer = combineReducers({
    // register_server: rdc_register_server,
    login: rdc_login,
    alerts: rdc_alert,
    // hientruong: rdc_hientruong,
    // container: rdc_container,
    // parking: rdc_parking,
    request_shopping: rdc_request_shopping,
})

export type RootState = ReturnType<typeof rootReducer>