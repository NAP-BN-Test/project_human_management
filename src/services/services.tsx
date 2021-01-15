import axios from 'axios';
import { URL, secretKey } from '../asset/data/data';

export const Services = {
    login,
    // get_list_hientruong,
    // get_list_container,
    // edit_status_vanchuyen,
    // edit_status_hientruong,
    // get_list_bai,
    // get_list_hientruongcheked
}

function login(req: any) {
    let body = {
        userName: req.username,
        password: req.password
    }
    return axios.post(`${URL}/qlnb/login`, body)
        .then((res: any) => {
            return res.data
        })
        .catch((err: any) => console.log(err))
}