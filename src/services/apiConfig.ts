import axios from "axios";


export const API_URL = 'https://localhost:7299';

export enum API {
    //autherize
    LOGIN = API_URL + '/login',
    REGISTER = API_URL + '/register-customer',
    FOGOTPASSWORD = '/senderOtpToEmail',
    OTP = API_URL + '/checkOtp',
    NEWPASS = API_URL + '/changePassword',

    //notification
    LISTNOTI = API_URL + '/api/Noti',
    CREATE_NOTI = API_URL + '/addNoti',
    UPDATE_NOTI = API_URL + '/api/Noti/',
    GET_SENTUSER = API_URL + '/api/Noti/get-sent-notifications',
    SENDNOTI = API_URL + '/api/Noti/SendByRole/',

    // statistical
    AVAILABLEROOM = API_URL + '/api/statistical/motels-with-empty-rooms',
    REVENUESTATISTIC = API_URL + '/api/statistical/api/revenue/last-six-months',
    PERCENTAGE = API_URL + '/api/statistical/expense-percentage',

    //ticket
    TICKETS = API_URL + '/api/Ticket/Tickets',
    UPDATETICKET = API_URL + '/api/Ticket/Assignee',
    CREATEtICKET = API_URL + '/api/Ticket/Tickets',
    RECEIVERS = API_URL + '/api/Ticket/GetReceivers',
    GETTICKETBYID = API_URL + '/api/Ticket/GetTicketById',

    //Room
    GETALLMOTEL = API_URL + '/Room/get-all-room-by-admin',
    GETMOTELBYID = API_URL + '/Room/get-motel-by-id',


    //user
    GETALLUSER = API_URL + '/User',
    GETUSERBYID = API_URL + '/User/',
    UPDATEUSER = API_URL + '/User/',
    DELETEUSER = API_URL + '/User/',
    GETROLE = API_URL + '/Role',

    //Home
    OUTSTANDINGMOTELS = API_URL + '/api/Main/outstanding-motels',
    NEWMOTELS = API_URL + '/api/Main/new',
    ROOMTYPEUNDERMILION = API_URL + '/api/Main/room-types-under-one-million',

    //UserManagement
    UPDATEUSERDETAIL = API_URL + '/update-user-from-token'
}

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
}

const roleRoutes: Record<string, string> = {
    'ADMIN': '/admin/',
    'CUSTOMER': '/',
    'OWNER': '/admin/',
    'STAFF': '/admin/'
};

export const getRouteFromToken = (token: string): string => {
    try {
        const decoded = jwtDecode<TokenPayload>(token);
        const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        const normalizedRole = role.toUpperCase();

        return roleRoutes[normalizedRole] || '/unauthorized';
    } catch (error) {
        console.error('Lỗi khi decode token:', error);
        return '/unauthorized';
    }
};


// Interceptor để tự động gắn token vào header
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor để xử lý response
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Token hết hạn hoặc không hợp lệ
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);


//refreshtoken nếu token hết hạn



export default axiosInstance;



