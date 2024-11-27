import { API } from "@/services/apiConfig";
import axios from "axios";


export interface User {
  fullName: string;
  phone: string;
  avatar: string;
  email: string;
}


export const getAccount = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        const res = await axios.get(API.USEDETAIL, { params: { token: token } })
        return res.data;
    }
    return null
}