interface PriceInfo {
  id: number;
  water: number;
  electric: number;
  other: number;
}

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
  status: number;
  createDate: string;
  totalRoom: number;
  price: PriceInfo;
  images: ImageInfo[];
  owner: OwnerInfo;
}

export interface MotelPaginationResponse {
  items: MotelDTO[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

// ------------------------------------------------------------------------------------------------

export interface MotelByIdDTO {
  id: number;
  name: string;
  address: string;
  status: number;
  createDate: string;
  totalRoom: number;
  price: PriceInfo;
  lastPrice: PriceInfo;
  images: ImageInfo[];
  owner: OwnerInfo;
  rooms: MotelRoomDTO[];
}

export interface MotelRoomDTO {
  id: number;
  roomNumber: number;
  area: number;
  price: number;
  lastPrice: number;
  status: number;
}

// ------------------------------------------------------------------------------------------------


export interface AddMotelAndRoomDTO {
  name?: string;
  address?: string;
  area: string;
  priceRoom: string;
  priceElectric: string;
  priceWater: string;
  priceOther: string;
  totalRoom: string;
  userId: string;

}

export interface GetEditMotelDTO {
  id: number;
  name: string;
  address: string;
  status: number;
  createDate: string;
  totalRoom: number;
  price: PriceInfo;
  lastPrice: PriceInfo;
  images: ImageInfo[];
  terms: MotelTermDTO[];
}
export interface EditMotelDTO {
  name: string;
  address: string;
  electric: string;
  water: string;
  other: string;
}

export interface MotelTermDTO {
  id: number;
  name: string;
  type: string;
  link: string;
}

// ------------------------------------------------------------------------------------------------

export interface RoomDTO {
  id: number;
  roomNumber: number;
  area: number;
  price: number;
  userFromRoom: number;
  lastPrice: number;
  status: number;
}

export interface AddRoomDTO {
  motelId : string;
  quantityRoom: string;
  area: string;
  price: string;
}

export interface MotelTermDTO {
  id: number;
  name: string;
  type: string;
  link: string;
}

