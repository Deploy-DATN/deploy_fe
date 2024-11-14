// API motel

import axios from "axios";

import axiosInstance, { API_URL } from "../apiConfig";
import { AddRoomDTO, EditMotelDTO, EditRoomByIdDTO, GetEditMotelDTO, MotelByIdDTO, MotelPaginationResponse, MotelRoomDTO, RoomDTO } from "../Dto/MotelDto";

import { ResponseDTO } from "./RepositoryDto";
import { FilterProps } from "@/pages/admin/motel";




export const getMotelByOwner = async (id: string | undefined, query: FilterProps) : Promise<MotelPaginationResponse> => {
    console.log(query);
    const response = (await axios.get<ResponseDTO<MotelPaginationResponse>>(`${API_URL}/Room/get-motel-by-owner/${id}`, {
        params: query
    }));
    return response.data.data;
}

export const getMotelByAdmin = async (query: FilterProps) : Promise<MotelPaginationResponse> => {
    const response = (await axiosInstance.get<ResponseDTO<MotelPaginationResponse>>(`${API_URL}/Room/get-all-room-by-admin`, {
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

export const UnlockMotel = async (id: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/active/${id}`));
    return response.data.message;
}
//remove motel
export const RemoveMotel = async (id: number) => {
    const response = (await axios.delete<ResponseDTO<null>>(`${API_URL}/Room/remove/${id}`));
    return response.data.message;
}



export const getMotelById = async (id: string | undefined) : Promise<MotelByIdDTO> => {
    const response = (await axios.get<ResponseDTO<MotelByIdDTO>>(`${API_URL}/Room/get-motel-by-id/${id}`));
    return response.data.data;
}

export const AddMotelAndRoom = async (formData: FormData) => {
    const response = (await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-motel-and-room`, formData , {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }));
    return response.data;
}

export const GetEditMotelById = async (id: string | undefined) : Promise<ResponseDTO<GetEditMotelDTO>> => {
    const response = (await axios.get<ResponseDTO<GetEditMotelDTO>>(`${API_URL}/Room/get-motel-by-id/${id}`));
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

export const AddUserRoomApi = async (data: {phone: string, roomId: number}) => {
    console.log(data);
    const response = (await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-user-to-room`, data));
    return response.data;
}

export const GetEditRoomById = async (roomId: number) => {
    const response = (await axios.get<ResponseDTO<MotelRoomDTO>>(`${API_URL}/Room/get-room-by-id/${roomId}`));
    return response.data;
}

export const EditRoomApi = async (data: EditRoomByIdDTO, roomId: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/edit-room-by-id/${roomId}`, data));
    return response.data;
}

export const ChangeRoomStatusToInactive = async (roomId: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/change-room-status-to-inactive/${roomId}`));
    return response.data;
}

export const ChangeRoomStatusToActive = async (roomId: number) => {
    const response = (await axios.put<ResponseDTO<null>>(`${API_URL}/Room/change-room-status-to-active/${roomId}`));
    return response.data;
}

