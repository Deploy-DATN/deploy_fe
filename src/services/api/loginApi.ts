import axios from "axios"
import { API } from '../apiConfig'

export interface Account {
    phone: string,
    password: string
}

// export const postLoginApi = (account: Account) => {
//     return axios.post(API.LOGIN, account);
// }