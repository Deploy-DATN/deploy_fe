import axios from "axios";


export const API_URL = 'https://localhost:7299';
export enum API {
    LOGIN = 'https://localhost:7299/login',
    REGISTER = 'https://localhost:7299/dang-ky-user',
    FOGOTPASSWORD = 'https://localhost:7299/senderOtpToEmail',
    OTP = 'https://localhost:7299/checkOtp',
    NEWPASS = 'https://localhost:7299/changePassword',
    LISTNOTI = 'https://localhost:7299/api/Noti',
    CREATE_NOTI = 'https://localhost:7299/addNoti',
    UPDATE_NOTI = 'https://localhost:7299/api/Noti/',
    AVAILABLEROOM = 'https://localhost:7299/api/statistical/available-motels',
    REVENUESTATISTIC = 'https://localhost:7299/api/statistical/last-six-months',
    PERCENTAGE = 'https://localhost:7299/api/statistical/expense-percentage',
    TICKETS = 'https://localhost:7299/api/Ticket/Tickets',
    GETTICKETBYID = 'https://localhost:7299/api/Ticket/GetTicketById',
    GETALLMOTEL = `https://localhost:7299/Room/get-all-room-by-admin`,
    GETMOTELBYID = `https://localhost:7299/Room/get-motel-by-id`,
    SENDNOTI = 'https://localhost:7299/api/Noti/SendByRole/',
    GETALLUSER = API_URL + '/User',
    GETUSERBYID = API_URL + '/User/',
    UPDATEUSER = API_URL + '/User/',
    DELETEUSER = API_URL + '/User/',
    GETROLE = API_URL + '/Role',
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



