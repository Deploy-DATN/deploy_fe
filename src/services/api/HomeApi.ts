import axios from "axios"
import { API } from '../apiConfig'
import { NumericKeys } from "node_modules/react-hook-form/dist/types/path/common";

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




// API search trang chu
export const getSearchMotelApi = async (Province: string, District: string, Ward: string, search:string, pageNumber: number, sortOption: string,
      minPrice: Number, maxPrice: Number, minArea: Number, maxArea: Number
     ) => {
    return axios.get(API.SEARCHMOTEL, { params: { Province, District, Ward, search, pageNumber, sortOption,
          minPrice, maxPrice, minArea, maxArea
         } })
}
// export const getSearchMotelApi = (params: any) => {
//     return axios.get(API.SEARCHMOTEL, {
//         params: params
//     });
// }