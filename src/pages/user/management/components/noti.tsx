import React from "react";
import "../styles/notiuser.scss"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";

const Noti = () => {

  const { notification } = useSelector((state: RootState) => state.user);
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const filterNotifications = (type: number | null) => {
    if (type === null) {
      return notification?.notifications; // Trả về tất cả thông báo nếu không chọn loại
    }
    return notification?.notifications.filter((noti) => noti.type === type);
  };

  const filteredNotifications = filterNotifications(selectedType);
  const notifis = [
    {
      id: 1,
      name: "Thông báo 1",
      content:
        "Thông báo về việc bảo trì hệ thống cccccc vvvvvvvvvvvvv cccccccccc xxxxxxxxxxxx zzzzzzzzzz ddddddd gggggggg fffffffffff ddddd ccccccc bbbbbbbbbbb nnnnnnnn mmmmmmmmm kkkkkkk uuuuuuuu iiiiiii .",
      type: 1,
      date: "2024-11-30",
      sender: "Admin",
    },
    {
      id: 2,
      name: "Thông báo 2",
      content: "Hệ thống sẽ ngừng hoạt động lúc 10h tối.",
      type: 2,
      date: "2024-11-29",
      sender: "Quản lý kỹ thuật",
    },
    {
      id: 3,
      name: "Thông báo 3",
      content: "Cập nhật chính sách nội bộ mới.",
      type: 3,
      date: "2024-11-28",
      sender: "Phòng Nhân sự",
    },
    {
      id: 4,
      name: "Thông báo 4",
      content: "Lịch nghỉ Tết Dương lịch đã được cập nhật.",
      type: 4,
      date: "2024-11-27",
      sender: "Phòng Hành chính",
    },
    {
      id: 5,
      name: "Thông báo 5",
      content: "Thông báo khẩn: Sự cố mạng đang được xử lý.",
      type: 1,
      date: "2024-11-26",
      sender: "Admin",
    },
  ];
  return (
    <>
      <div className="menu-noti-header-user">
        <div className="dropdown-header">
          <div className="header-noti-title">Thông báo</div>
          <a href="#" className="header-noti-tatca">
            Tất cả thông báo
          </a>
        </div>
        <div className="dropdown-nav-noti mb-2">
          <div className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="all"
              className="tab__radio"
              onChange={() => setSelectedType(null)} // Chọn tất cả
              checked={selectedType === null}
            />
            <label htmlFor="all" className="tab__label">
              Tất cả
            </label>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="khan-cap"
              className="tab__radio"
              onChange={() => setSelectedType(1)} // Chọn loại 1
              checked={selectedType === 1}
            />
            <label htmlFor="khan-cap" className="tab__label">
              Khẩn cấp
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="he-thong"
              className="tab__radio"
              onChange={() => setSelectedType(2)} // Chọn loại 2
              checked={selectedType === 2}
            />
            <label htmlFor="he-thong" className="tab__label">
              Hệ thống
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="thong-thuong"
              className="tab__radio"
              onChange={() => setSelectedType(3)} // Chọn loại 3
              checked={selectedType === 3}
            />
            <label htmlFor="thong-thuong" className="tab__label">
              Thông thường
            </label>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="canh-bao"
              className="tab__radio"
              onChange={() => setSelectedType(4)} // Chọn loại 4
              checked={selectedType === 4}
            />
            <label htmlFor="canh-bao" className="tab__label">
              Cảnh báo
            </label>
          </div>

        </div>
        <div className="dropdown-noti-item row g-2 px-3">
          {filteredNotifications ? (
            filteredNotifications.map((noti) => (
              <div key={noti.id} className="col-12 dropdown-noti-item-row px-3 mb-2 border rounded bg-light mt-2 py-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div
                    className={`dropdown-noti-item--type dropdown-noti-item-type-${noti.type}`}
                  >
                    {noti.type === 1
                      ? "Khẩn cấp"
                      : noti.type === 2
                        ? "Hệ thống"
                        : noti.type === 3
                          ? "Thông thường"
                          : "Cảnh báo"}
                  </div>
                  <div className="dropdown-noti-item--date">{(new Date(noti.createDate).toLocaleDateString('vi-VN'))}</div>
                </div>
                <div className="dropdown-noti-item--name">{noti.title}</div>
                <div className="dropdown-noti-item--content">{noti.content}</div>
                <div className="dropdown-noti-item--sender">Người gửi: {noti.sender}</div>
              </div>
            ))
          ) : (
            <div className="no-noti">Không có thông báo nào</div>
          )}

        </div>
      </div>
    </>
  );
};

export default Noti;
