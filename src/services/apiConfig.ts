export const API_URL = 'https://localhost:7299';

export enum API {
    LOGIN = API_URL +'/dang-nhap',
    REGISTER = API_URL +'/dang-ky-user',
    FOGOTPASSWORD = '/senderOtpToEmail',
    OTP = API_URL +'/checkOtp',
    NEWPASS = API_URL +'/changePassword',
    LISTNOTI = API_URL +'/api/Noti',
    CREATE_NOTI = API_URL +'/addNoti',
    UPDATE_NOTI = API_URL +'/api/Noti/',
    AVAILABLEROOM = API_URL +'/api/statistical/available-motels',
    REVENUESTATISTIC = API_URL +'/api/statistical/last-six-months',
    PERCENTAGE = API_URL +'/api/statistical/expense-percentage',

    TICKETS = API_URL +'/api/Ticket/Tickets',
    UPDATETICKET =API_URL +'/api/Ticket/Assignee',
    CREATEtICKET = API_URL + '/api/Ticket/Tickets',

    RECEIVERS = API_URL +'/api/Ticket/GetReceivers',
    GETTICKETBYID=API_URL +'/api/Ticket/GetTicketById',
    GETALLMOTEL = API_URL +'/Room/get-all-room-by-admin',
    GETMOTELBYID = API_URL +'/Room/get-motel-by-id',
    SENDNOTI = API_URL +'/api/Noti/SendByRole/',
    GETALLUSER = API_URL + '/User',
    GETUSERBYID = API_URL + '/User/',
    UPDATEUSER = API_URL + '/User/',
}




