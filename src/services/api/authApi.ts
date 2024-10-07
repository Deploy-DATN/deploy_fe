import axios from "axios"
import { API } from '../apiConfig'

export interface Account {
    phone: string,
    password: string
}

export interface RegisterAccount extends Account {
    userName: string,
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

