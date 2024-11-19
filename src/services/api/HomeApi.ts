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