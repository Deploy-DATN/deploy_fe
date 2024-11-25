import axios from "axios"
import { API } from '../apiConfig'

export interface Image {
    id: number;
    link: string;
}

export interface RoomType {
    id: number;
    price: number;
    name: string;
    address: string;
    images: Image[];
}

export interface UserDetail {
    fullName: string;
    phone: string;
    email: string;
}

export interface PasswordUser {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface UserDetailAva {
    fullName: string;
    phone: string;
    avatar: string;
    email: string;
}


export interface otherPrice {
    name: string;
    price: string;
}

export interface roomImages {
    id: number,
    link: string,
    type: string
}




//API trang chu

export const getOutstandingMotelApi = async (osMotels: RoomType) => {
    return axios.get(API.OUTSTANDINGMOTELS, { params: osMotels });
};

export const getNewMotelApi = async (newmotel: RoomType) => {
    return axios.get(API.NEWMOTELS, { params: newmotel })
}

export const getSaleRoomTypeApi = async (roomtype: RoomType) => {
    return axios.get(API.ROOMTYPEUNDERMILION, { params: roomtype })
}

export const postDetaiUserApi = async (userdetail: UserDetail, token: string) => {
    const formData = new FormData();
    formData.append('fullName', userdetail.fullName)
    formData.append('phone', userdetail.phone);
    formData.append('email', userdetail.email);
    return axios.put(`${API.UPDATEUSERDETAIL}?token=${token}`, formData)
}

export const postAvatarApi = async (avatar: File, token: string) => {
    const formData = new FormData();
    formData.append('avatar', avatar)
    return axios.put(`${API.UPDATEUSERDETAIL}?token=${token}`, formData)
}

export const postChangePassApi = async (changepass: PasswordUser, token: string) => {
    return axios.post(`${API.PASSWORDUSER}?token=${token}`, changepass)
}

export const GetUserDetailAvaApi = async (changeava: UserDetailAva, token: string) => {
    return axios.get(`${API.USEDETAIL}?token=${token}`, { params: changeava })
}

export const GetRoomTypeID = async (id: number) => {
    return axios.get(`${API.GETROOMTYPEBYID}${id}`)
}

export const GetRentalRoomDetailAPI = async (token: string) => {
    return axios.get(`${API.RENTALROOMDETAIL}?token=${token}`)
}




