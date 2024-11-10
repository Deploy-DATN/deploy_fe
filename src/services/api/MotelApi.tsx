// API motel

import axios from "axios";
import axiosInstance, { API, API_URL } from "../apiConfig";
import { MotelByIdDTO, MotelDTO } from "../Dto/MotelDto";
import { ResponseDTO } from "./RepositoryDto";
import { FilterProps } from "@/pages/admin/motel";



export const getMotelByIdApi = async (id: string | undefined) : Promise<MotelByIdDTO> => {
    const response = (await axiosInstance.get<ResponseDTO<MotelByIdDTO>>(`${API.GETMOTELBYID}/${id}`));
    return response.data.data;
}

export const getMotelByAdmin = async (query: FilterProps) : Promise<MotelDTO[]> => {
    const response = (await axiosInstance.get<ResponseDTO<MotelDTO[]>>(`${API_URL}/Room/get-all-room-by-admin`, {
        params: query
    }));
    return response.data.data;
}

export const RejectMotel = async (id: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/reject/${id}`));
    return response.data.message;
}

export const ApproveMotel = async (id: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/approve/${id}`));
    return response.data.message;
}

export const LockMotel = async (id: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/lock/${id}`));
    return response.data.message;
}
