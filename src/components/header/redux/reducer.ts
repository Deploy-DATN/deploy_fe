import { API } from '@/services/apiConfig';
import axios from 'axios';


export interface User {
  fullName: string;
  phone: string;
  avatar: string;
  email: string;
  role: string;
}

export interface MyMotel {
  id: number;
  name: string;
  address: string;
  description: string;
  createDate: Date;
  status: number;
  service: [
    {
      id: number;
      name: string;
      price: number;
    }
  ];
  roomType: [
    {
      id: number;
      name: string;
      area: number;
      description: string;
      price: number;
      totalRoom: number;
      images: [
        {
          id: number;
          link: string;
          type: string;
        }
      ]
    }
  ]
}


export const getAccount = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await axios.get(API.USEDETAIL, { params: { token: token } })
    return res.data;
  }
  return null
}

export const getMyMotel = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await axios.get(API.MYMOTEL, { params: { token: token } })
    return res.data.data;
  }
  return null
}