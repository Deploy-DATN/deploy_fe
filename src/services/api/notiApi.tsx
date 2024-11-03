import axios from "axios"
import { API } from '../apiConfig'
import { ParamsPage } from "../Dto/NotificationDto"


export const getNotis = (param?: ParamsPage) => {
    return axios.get(API.LISTNOTI, { params: param });
}