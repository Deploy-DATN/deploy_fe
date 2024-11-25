// API motel

import axios from 'axios';

import axiosInstance, { API_URL } from '../apiConfig';
import { AddServiceDTO, EditMotelDTO, EditRoomTypeDTO, EditServiceDTO, GetMotelEditDTO, GetMotelEditDTO_Service, GetRoomTypeByEditDTO, GetRoomTypeDTO, MotelPaginationResponse, RoomDTO } from '../Dto/MotelDto';

import { ResponseDTO } from './RepositoryDto';
import { FilterProps } from '@/pages/admin/motel';
import { getAccountApi } from './authApi';

export const getMotelByOwnerApi = async (query: FilterProps): Promise<MotelPaginationResponse> => {
	var user = await getAccountApi();
	const response = await axios.get<ResponseDTO<MotelPaginationResponse>>(`${API_URL}/Room/get-motel-by-owner/${user.data.data.id}`, {
		params: query,
	});
	return response.data.data;
};

export const getMotelByAdminApi = async (query: FilterProps): Promise<MotelPaginationResponse> => {
	const response = await axiosInstance.get<ResponseDTO<MotelPaginationResponse>>(`${API_URL}/Room/get-all-motel-by-admin`, {
		params: query,
	});
	return response.data.data;
};

export const AddMotel = async (formData: FormData) => {
	const response = await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-motel`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

export const GetMotelByEditApi = async (id: string | undefined): Promise<ResponseDTO<GetMotelEditDTO>> => {
	const response = await axios.get<ResponseDTO<GetMotelEditDTO>>(`${API_URL}/Room/get-motel-edit/${id}`);
	return response.data;
};

export const EditMotel = async (data: EditMotelDTO) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/edit-motel`, data);
	return response.data;
};

export const AddService = async (data: AddServiceDTO[]) => {
	console.log(data);
	const response = await axios.post<ResponseDTO<null>>(`${API_URL}/Service/add-service`, data);
	return response.data;
};

export const DeleteService = async (data: number[]) => {
	const response = await axios.delete<ResponseDTO<null>>(`${API_URL}/Service/delete-service`, {
		data: data,
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.data;
};

export const EditService = async (data: EditServiceDTO[]) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Service/edit-service`, data);
	return response.data;
};

export const ApproveMotelApi = async (id: number) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/approve-motel/${id}`);
	return response.data;
};

export const RejectMotelApi = async (id: number) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/reject-motel/${id}`);
	return response.data;
};

export const LockMotelApi = async (id: number) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/lock-motel/${id}`);
	return response.data;
};

export const UnLockMotelApi = async (id: number) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/unlock-motel/${id}`);
	return response.data;
};

export const DeleteMotel = async (id: number) => {
	const response = await axios.delete<ResponseDTO<null>>(`${API_URL}/Room/delete-motel/${id}`);
	return response.data;
};

export const GetRoomTypeByMotelId = async (id: string | undefined) => {
	if (!id) {
		console.log('idMotel is undefined');
		return;
	}
	const response = await axios.get<ResponseDTO<GetRoomTypeDTO[]>>(`${API_URL}/Room/get-room-type-by-motel-id/${id}`);
	return response.data;
};

export const AddRoomApi = async (data: { roomTypeId: number; quantityRoom: number }) => {
	const response = await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-room`, data);
	return response.data;
};

export const AddRoomTypeApi = async (data: FormData) => {
	const response = await axios.post<ResponseDTO<null>>(`${API_URL}/Room/add-room-type`, data);
	return response.data;
};

export const GetRoomByIdApi = async (id: string | undefined) => {
	if (!id) {
		console.log('id is undefined');
		return;
	}
	const response = await axios.get<ResponseDTO<RoomDTO>>(`${API_URL}/Room/get-room-by-id/${id}`);
	return response.data;
};

export const GetRoomTypeByEditApi = async (id: string | undefined) => {
	if (!id) {
		console.log('id is undefined');
		return;
	}
	const response = await axios.get<ResponseDTO<GetRoomTypeByEditDTO>>(`${API_URL}/Room/get-room-type-by-edit/${id}`);
	return response.data;
};

export const EditRoomTypeApi = async (data: FormData) => {
	const response = await axios.put<ResponseDTO<null>>(`${API_URL}/Room/edit-room-type`, data);
	return response.data;
};
