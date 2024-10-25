import axios from "axios"
import { API } from '../apiConfig'

export interface Account {
    phone: string,
    password: string
}

export interface RegisterAccount extends Account {
    name: string,
    email: string
}

// test chưa chỉnh sql

export interface Account1 {
    phone: string,
    password: string
}

export interface ForgotPassword {
    phoneNumber: string
}

export interface Otp {
    otp: string
}

export interface NewPassword {
    password: string,
    confimPassWord: string
}

export interface Noti {
    id: number;
    type: number;
    title: string;
    content: string;
    status: number;
}

export interface AddNoti {
    type: number;
    title: string;
    content: string;
}

export interface UpdateNoti {
    type: number;
    title: string;
    content: string;
}



// API đăng nhập

export const postLoginApi = (account: Account) => {
    return axios.post(API.LOGIN, account);
}
export const postLoginApi1 = (account: Account1) => {
    return axios.post(API.LOGIN, account);
}

export const postForgotApi = (forgotPassword: ForgotPassword) => {
    return axios.post(API.FOGOTPASSWORD, forgotPassword);
}

// API đăng ký

export const postRegisterApi = (account: RegisterAccount) => {
    return axios.post(API.REGISTER, account);
}

export const getOtpApi = (checkOtp: Otp) => {
    return axios.get(API.OTP, { params: checkOtp });
}

export const postNewPWApi = (newPassword: NewPassword) => {
    return axios.post(API.NEWPASS, newPassword);
};

//API thông báo

export const getListNotiApi = async () => {
    return axios.get<{ code: number, status: string, message: string, data: Noti[] }>(API.LISTNOTI);
};

export const postAddNotiApi = async (addNoti: AddNoti) => {
    return await axios.post(API.CREATE_NOTI, addNoti);
}

export const postUpdateNotiApi = async (notificationId: number, updateNoti: UpdateNoti) => {
    return await axios.put(`${API.UPDATE_NOTI}${notificationId}`, updateNoti);
}

