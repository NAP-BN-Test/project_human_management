import { Actions } from 'react-native-router-flux';
import { Services } from '../../services/services';
import * as constants from '../constants';
import { User } from '../states/type';

function act_alert_error(messages: string) {
    return {
        type: constants.ALERT_ERROR,
        message: messages
    }
};
function request(user: string) { return { type: constants.LOGIN, user: user } }

function success(username: string) { return { type: constants.ALERT_SUCCESS, message: username } }

function act_login(users: User) {
    return (dispatch: any) => {
        let body = {
            username: users.userName,
            password: users.passWord
        }
        Services.login(body)
            .then(async (res) => {
                if (res.status == '1') {

                    dispatch(success("Hello " + res.obj.name))
                    let user = res.obj
                    dispatch(request(user))
                    Actions.Home()
                }
                else {
                    dispatch(act_alert_error(res.message))
                }
            }
            );
    }

    // type: constants.LOGIN,
    // user: users,
    // server: servers,
    // statusLogin: statusLogins
};
export const Action = {
    act_login,
    // act_alert_success,
    // act_alert_error,
    // act_alert_clear,
    // act_get_hientruong,
    // act_changestatushientruong,
    // act_get_container,
    // act_changestatusvanchuyen,
    // act_get_hientruongcheked
}