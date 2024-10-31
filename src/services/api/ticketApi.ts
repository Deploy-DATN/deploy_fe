import axios from "axios"
import { API } from '../apiConfig'

//api ticket

export const getTickets = () => {
    return axios.get(API.TICKETS);
}