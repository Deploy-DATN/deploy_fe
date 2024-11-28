import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout";
import Err from "@/pages/err";
import { Dashboard } from "./dashboard";
import { Account } from "./account";
import { Motel } from "./motel";
import { Notification } from "./notification";
import { TicketPage } from "./ticket";
import "../admin/assets/css/Adminstyle.scss";
import IndexOwner from "./motel/component/indexOwner";
import AddMotelOwner from "./motel/component/addmotel";
import EditMotelOwner from "./motel/component/editmotel";
import Infoticket from "./ticket/component/Inforticket";
import { OwnerIndexNoti } from "./notification/component/OwnerNoti";
import { Bill } from "./BillOwner";
import Unauthorized from "../login/components/unauthorized";
import ProtectedRoute from "@/services/api/ProtectedRoute";
import CreateTicket from "./ticket/component/create_ticket";
import { Roomtesst } from "./room/roomtesst";
import Inforoom from "./room/component/inforoom";
import { UserProvider } from "@/services/api/UserContext";
import Profile from "../admin/Profile/index";
import ChangePassword from '../admin/Profile/ChangePass';
export const Admin = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route không cần bảo vệ */}
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="adminprofile" element={<Profile />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route index element={<Dashboard />} />
          <Route path="roomtest" element={<Roomtesst />} />
          <Route path="inforoom" element={<Inforoom />} />
          <Route path="indexOwner">
            <Route index element={<IndexOwner />} />
            <Route path="addModelOwner" element={<AddMotelOwner />} />
            <Route path="EditModelOwner/:id" element={<EditMotelOwner />} />
          </Route>
          <Route path="OwnerIndexNoti" element={<OwnerIndexNoti />} />
          <Route path="bill" element={<Bill />} />
          <Route path="support" element={<CreateTicket />} />
          <Route path="ticket">
            <Route index element={<TicketPage />} />
            <Route path=":id" element={<Infoticket />} />
          </Route>
          <Route path="account" element={<Account />}></Route>
          <Route path="notification" element={<Notification />} />
          {/* Routes chỉ dành cho Admin */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="motel">
              <Route index element={<Motel />} />
            </Route>
          </Route>

          {/* Routes chỉ dành cho Admin và Owner */}
          <Route element={<ProtectedRoute allowedRoles={["Admin", "Owner"]} />}>
            <Route path="roomtest/:motelId" element={<Roomtesst />} />
            <Route path="inforoom/:id" element={<Inforoom />} />
          </Route>

          {/* Routes chỉ dành cho Owner */}
          <Route element={<ProtectedRoute allowedRoles={["Owner"]} />}>
            <Route path="indexOwner">
              <Route index element={<IndexOwner />} />
              <Route path="addModelOwner" element={<AddMotelOwner />} />
              <Route path="EditModelOwner/:id" element={<EditMotelOwner />} />
            </Route>
            <Route path="OwnerIndexNoti" element={<OwnerIndexNoti />} />
            <Route path="bill" element={<Bill />} />
            <Route path="support" element={<CreateTicket />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["Admin", "Staff"]} />}>
            <Route path="notification" element={<Notification />} />
          </Route>

          {/* Routes chung cho tất cả roles admin */}

          <Route path="ticket">
            <Route index element={<TicketPage />} />
            <Route path=":id" element={<Infoticket />} />
          </Route>
          <Route path="account" element={<Account />}></Route>
        </Route>
        <Route path="*" element={<Err />} />
      </Routes>
    </UserProvider>
  );
};
