// API motel

import axios from "axios";
<<<<<<< HEAD
import { API_URL } from "../apiConfig";
import { AddRoomDTO, EditMotelDTO, GetEditMotelDTO, MotelByIdDTO, MotelPaginationResponse, RoomDTO } from "../Dto/MotelDto";
=======
import axiosInstance, { API, API_URL } from "../apiConfig";
import { MotelByIdDTO, MotelDTO } from "../Dto/MotelDto";
>>>>>>> dev
import { ResponseDTO } from "./RepositoryDto";
import { FilterProps } from "@/pages/admin/motel";



<<<<<<< HEAD
export const getMotelByOwner = async (id: string | undefined) : Promise<MotelByIdDTO[]> => {
    const response = (await axios.get<ResponseDTO<MotelByIdDTO[]>>(`${API_URL}/Room/get-motel-by-owner/${id}`));
    return response.data.data;
}

export const getMotelByAdmin = async (query: FilterProps) : Promise<MotelPaginationResponse> => {
    const response = (await axios.get<ResponseDTO<MotelPaginationResponse>>(`${API_URL}/Room/get-all-room-by-admin`, {
=======
export const getMotelByIdApi = async (id: string | undefined) : Promise<MotelByIdDTO> => {
    const response = (await axiosInstance.get<ResponseDTO<MotelByIdDTO>>(`${API.GETMOTELBYID}/${id}`));
    return response.data.data;
}

export const getMotelByAdmin = async (query: FilterProps) : Promise<MotelDTO[]> => {
    const response = (await axiosInstance.get<ResponseDTO<MotelDTO[]>>(`${API_URL}/Room/get-all-room-by-admin`, {
>>>>>>> dev
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

export const getMotelById = async (id: string | undefined) : Promise<MotelByIdDTO> => {
    const response = (await axios.get<ResponseDTO<MotelByIdDTO>>(`${API_URL}/Room/get-room-by-id/${id}`));
    return response.data.data;
}

export const AddMotelAndRoom = async (formData: FormData) => {
    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }
    const response = (await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-motel-and-room`, formData , {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }));
    return response.data;
}

export const GetMotelById = async (id: string | undefined) : Promise<ResponseDTO<GetEditMotelDTO>> => {
    const response = (await axios.get<ResponseDTO<GetEditMotelDTO>>(`${API_URL}/Room/get-motel-by-id/${id}`));
    return response.data;
}

export const GetRoomByMotelId = async (id: string | undefined) : Promise<ResponseDTO<RoomDTO[]>> => {
    const response = (await axios.get<ResponseDTO<RoomDTO[]>>(`${API_URL}/Room/get-room-by-motel-id/${id}`));
    return response.data;
}

export const AddRoom = async (data: AddRoomDTO) => {
    const response = (await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-multi-room`, data));
    return response.data;
}

export const EditMotel = async (data: FormData, motelId: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/edit-motel/${motelId}`, data));
    return response.data;
}

