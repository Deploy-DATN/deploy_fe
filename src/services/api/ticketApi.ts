import axios from "axios"
import { API } from '../apiConfig'
import { ParamsPage } from "../Dto/ticketDto";

//get tickets
export const getTickets = (param?: ParamsPage) => {
    return axios.get(API.TICKETS, { params: param });
}

// get ticket by id
export const getTicketById = (id: number) => {
    return axios.get(API.GETTICKETBYID, { params: { id: id } });
}