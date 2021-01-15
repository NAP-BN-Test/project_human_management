import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "../constants";

const initState = {
    type: '',
    message: ''
}

function rdc_alert(state = initState, action: any) {
    switch (action.type) {
        case ALERT_SUCCESS:
            // state.type = 'success'
            // state.message = action.message
            return {
                type: 'success',
                message: action.message
            }
        case ALERT_ERROR:
            return {
                type: 'error',
                message: action.message
            }
        case ALERT_CLEAR:
            return {}
        default:
            return state
    }
}

export default rdc_alert