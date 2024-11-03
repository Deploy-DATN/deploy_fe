import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { postSendNotiApi, SendNoti } from "@/services/api/authApi";
import { jwtDecode } from "jwt-decode";
import { KEY_LOCAL, getFromLocalStorage } from "@/ustils/local/F_LocalStorage";
import "src/pages/admin/notification/notification.scss";

interface SendNotificationProps {
  onClose: () => void;
  notificationId: number;
}

const SendNotification: React.FC<SendNotificationProps> = ({
  notificationId,
  onClose,
}) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [availableRoles, setAvailableRoles] = useState<string[]>([
    "customer",
    "admin",
    "staff",
    "owner",
  ]);
  const { handleSubmit } = useForm<SendNoti>();

  useEffect(() => {
    const token = getFromLocalStorage<string>(KEY_LOCAL.TOKEN);
    if (token) {
      const decoded: any = jwtDecode(token);
      const userRole =
        decoded[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ].toLowerCase();
      const filteredRoles = availableRoles.filter(
        (role) => role.toLowerCase() !== userRole
      );
      console.log("Available Roles after filtering:", filteredRoles);
      setAvailableRoles(filteredRoles);
    }
  }, []);
  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
    console.log("Selected Role:", event.target.value);
  };

  const onSubmit = async (data: SendNoti) => {
    if (!selectedRole) {
      Swal.fire({
        icon: "warning",
        title: "Cảnh báo!",
        text: "Vui lòng chọn một vai trò.",
      });
      return;
    }

    try {
      const response = await postSendNotiApi(
        selectedRole,
        notificationId,
        data
      );
      if (response.data.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Thành công",
          text: "Gửi thông báo thành công",
        });
        onClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Lỗi!",
          text: "Gửi thông báo thất bại",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Có lỗi xảy ra trong quá trình gửi thông báo",
      });
      console.error("Lỗi gửi thông báo:", error);
    }
  };

  return (
    <div className="modal-overlay-admin">
      <div className="modal-overlay-notifi-send">
        <div className="modal-content-notifi-send position-relative">
          <h2 className="h2-modal-send">Gửi Thông Báo</h2>
          <form className="form-send-notifi" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-3">
              <label htmlFor="roles">Vai trò</label>
              <div className="mt-2">
                {availableRoles.map((role) => (
                  <div key={role} className="form-check">
                    <input
                      type="radio"
                      value={role}
                      checked={selectedRole === role}
                      onChange={handleRoleChange}
                      className="form-check-input"
                      id={`role-${role}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`role-${role}`}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn-trove-all btn-style btn-transform-y2"
                onClick={onClose}
              >
                Trở về
              </button>
              <button
                type="button"
                className="btn-luu-all btn-style btn-transform-y2"
              >
                Bảo trì
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;