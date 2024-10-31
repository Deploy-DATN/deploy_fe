export interface Img {
    imgs: string;
}

export interface Data {
    id: number;
    type: number;
    title: string;
    content: string;
    status: number;
    receiver: string | null;
    userId: number | null;
    userName:string;
    modelId: number | null;
    imgs: Img[] | null;
}