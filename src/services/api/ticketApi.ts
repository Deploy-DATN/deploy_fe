import axios from "axios"
import { API } from '../apiConfig'
import { ParamsPage, FormTicket, FormCreate } from "../Dto/ticketDto";

//get tickets
export const getTickets = (param?: ParamsPage) => {
    return axios.get(API.TICKETS, { params: param });
}

// get ticket by id
export const getTicketById = (id: number) => {
    return axios.get(API.GETTICKETBYID, { params: { id: id } });
}

// get receivers
export const getReceiver = (roleName?: string) => {
    return axios.get(API.RECEIVERS, { params: { roleName: roleName } });
}

// get receivers
export const UpdateTicket = (param: FormTicket) => {
    return axios.post(API.UPDATETICKET, param);
}

//create owner

export const CreateTicket = (param: FormCreate) => {
    const formData = new FormData();
    formData.append('title', param.title);
    formData.append('content', param.content);
    formData.append('type', String(param.type));
    formData.append('receiver', param.receiver || '');
    formData.append('userId', param.userId ? String(param.userId) : '');
    formData.append('modelId', param.modelId ? String(param.modelId) : '');

    param.imgs.forEach((item) => {
        if (item instanceof File) {
            formData.append('imgs', item);
        }
    });
    return axios.post(API.CREATEtICKET, formData);
}