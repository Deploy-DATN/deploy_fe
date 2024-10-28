import axios from "axios"
import { API } from '../apiConfig'

export interface Img {
    imgs: string;
}

export interface Data {
    id: number;
    type: number;
    title: string;
    content: string;
    status: number;
    receiver: string | null;
    userId: number | null;
    userName:string;
    modelId: number | null;
    imgs: Img[] | null;
}

//api ticket

export const getTickets = () => {
    return axios.get(API.TICKETS);
}