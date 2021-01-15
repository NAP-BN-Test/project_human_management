import { LOGIN, LOGOUT } from "../constants"

const initState = {
    user: {
        id: 0,
        userName: '',
        passWord: ''
    },
    server: {
        ip: null,
        dbName: null
    }
}

const rdc_login = (state = initState, action: any) => {
    switch (action.type) {
        case LOGIN:
            state.user.id = action.user.userID
            return state
        case LOGOUT:
            return state
        default:
            return state
    }
}

export default rdc_login