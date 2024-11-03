export interface Ticket {
    id: number;
    type: number;
    title: string;
    content: string;
    status: number;
}

export interface InfoTicket extends Ticket {
    receiver: string;
    createDate: Date;
    userId: number | null;
    userName: string;
    modelId: number | null;
    imgs: string[] | null;
}

export interface Data {
    totalCount: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    items: Ticket[];
}

export interface ParamsPage {
    search?: string;
    pageNumber?: number;
    pageSize?: number;
    status?: number;
}