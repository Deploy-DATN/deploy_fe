
interface OwnerInfo {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  avatar: string;
  createDate: string;
  status: boolean;
}

export interface ImageInfo {
  id?: number;
  link: string;
  type: string;
}

export interface MotelDTO {
  id: number;
  name: string;
  address: string;
  description: string; // Thêm trường mô tả
  location: string | null; // Thêm trường vị trí, có thể null
  rating: number; // Thêm trường đánh giá
  status: number;
  createDate: string;
  totalRoom: number;
  owner: OwnerInfo;
}

export interface MotelPaginationResponse {
  items: MotelDTO[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

// ------------------------------------------------------------------------------------------------


export interface AddMotelDTO {
  nameMotel?: string;
  address?: string;
  nameRoom?: string;
  area: number;
  priceRoom: number;
  totalRoom: number;
  description: string;
  userId: number | undefined;
}

// ------------------------------------------------------------------------------------------------

export interface GetMotelEditDTO {
  id: number;
  name: string;
  address: string;
  services: GetMotelEditDTO_Service[] | null;
}

export interface GetMotelEditDTO_Service {
  id: number;
  name: string;
  price: number;
  description: string;
}
// ------------------------------------------------------------------------------------------------

export interface EditMotelDTO {
  id: number;
  name: string;
  address: string;
}

// ------------------------------------------------------------------------------------------------

export interface AddServiceDTO {
  name: string;
  price: number;
  description: string;
  motelId: string;
}

export interface EditServiceDTO {
  id: number;
  name: string;
  price: number;
  description: string;
}



