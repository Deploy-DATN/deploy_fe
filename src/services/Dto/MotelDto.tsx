interface PriceInfo {
  id: number;
  water: number;
  electric: number;
  other: number;
}

interface OwnerInfo {
  id: number;
  fullName: string;
}

interface ImageInfo {
  id: number;
  link: string;
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
}

// ------------------------------------------------------------------------------------------------