import { REQUEST_SHOPPING } from "../constants";

const item_request_shopping = {
    id: null || 0,
    departmentName: '',
    staffName: '',
    requireDate: '',
    amount: null || 0,
    status: '',
    nameAsset: '',
    reason: '',
}

const initState = [item_request_shopping]

const rdc_request_shopping = (state = initState, action: any) => {
    switch (action.type) {
        case REQUEST_SHOPPING:
            const list_request_shopping = []
            for (var i = 0; i < parseInt(action.request.length); i++) {
                const request = {
                    id: null,
                    departmentName: null,
                    staffName: null,
                    requireDate: null,
                    amount: null,
                    status: null,
                    nameAsset: null,
                    reason: null,
                }
                request.id = action.request[i].id
                request.departmentName = action.request[i].departmentName
                request.staffName = action.request[i].staffName
                request.requireDate = action.request[i].requireDate
                request.amount = action.request[i].amount
                request.status = action.request[i].status
                request.nameAsset = action.request[i].nameAsset
                request.reason = action.request[i].reason

                list_request_shopping[i] = request
            }
            return list_request_shopping
        default:
            return state
    }
}

export default rdc_request_shopping