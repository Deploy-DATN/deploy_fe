export const API_URL = 'https://localhost:7299';
export enum API {
    LOGIN = 'https://localhost:7299/dang-nhap',
    REGISTER = 'https://localhost:7299/dang-ky-user',
    FOGOTPASSWORD = 'https://localhost:7299/senderOtpToEmail',
    OTP = 'https://localhost:7299/checkOtp',
    NEWPASS = 'https://localhost:7299/changePassword',
    LISTNOTI = 'https://localhost:7299/api/Noti',
    CREATE_NOTI = 'https://localhost:7299/addNoti',
    UPDATE_NOTI = 'https://localhost:7299/api/Noti/',
    AVAILABLEROOM = 'https://localhost:7299/api/statistical/available-motels',
    REVENUESTATISTIC = 'https://localhost:7299/api/statistical/last-six-months',
    PERCENTAGE = 'https://localhost:7299/api/statistical/expense-percentage',
    TICKETS = 'https://localhost:7299/api/Ticket/Tickets',
    GETTICKETBYID='https://localhost:7299/api/Ticket/GetTicketById',
    GETALLMOTEL = `https://localhost:7299/Room/get-all-room-by-admin`,
    GETMOTELBYID = `https://localhost:7299/Room/get-motel-by-id`,
    SENDNOTI = 'https://localhost:7299/api/Noti/SendByRole/',
    GETALLUSER = API_URL + '/User',
    GETUSERBYID = API_URL + '/User/',
    UPDATEUSER = API_URL + '/User/',
}




