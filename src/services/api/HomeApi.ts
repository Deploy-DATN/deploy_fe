import axios from "axios"
import { API } from '../apiConfig'

export interface Image {
    id: number;
    link: string;
}

export interface RoomType {
    id: number;
    price: number;
    images: Image[];
}

export interface Motel {
    name: string;
    roomTypes: RoomType[];
}

//API trang chu

export const getOutstandingMotelApi = async () => {
    return axios.get<{ data: Motel[] }>(API.OUTSTANDINGMOTELS);
};