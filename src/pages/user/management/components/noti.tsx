import React from "react";
import "../styles/notiuser.scss"
const Noti = () => {
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
            ></input>
            <label htmlFor="all" className="tab__label">
              Tất cả
            </label>
          </div>
          <div id="notif_type_1" className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="khan-cap"
              className="tab__radio"
              value="1"
            ></input>
            <label htmlFor="khan-cap" className="tab__label">
              Khẩn cấp{" "}
            </label>
          </div>
          <div id="notif_type_2" className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="he-thong"
              className="tab__radio"
              value="2"
            ></input>
            <label htmlFor="he-thong" className="tab__label">
              Hệ thống{" "}
            </label>
          </div>
          <div id="notif_type_3" className="tab">
            <input
              type="radio"
              name="tabsnoti"
              id="thong-thuong"
              className="tab__radio"
              value="3"
            ></input>
            <label htmlFor="thong-thuong" className="tab__label">
              Thông thường{" "}
            </label>
          </div>
        </div>
        <div className="dropdown-noti-item row g-2">
          {notifis.map((noti) => (
            <div className="col-12 dropdown-noti-item-row px-3">
              <div className="d-flex justify-content-between align-items-center ">
                <div
                  className={`dropdown-noti-item--type dropdown-noti-item-type-${noti.type}`}
                >
                  {noti.type === 1
                    ? "Khẩn cấp"
                    : noti.type === 2
                    ? "Hệ thống"
                    : noti.type === 3
                    ? "Cảnh báo" 
                    : "Thông thường"}
                </div>
                <div className="dropdown-noti-item--date">{noti.date}</div>
              </div>
              <div className="dropdown-noti-item--name">{noti.name}</div>
              <div className="dropdown-noti-item--content">{noti.content}</div>
              <div className="dropdown-noti-item--sender">{noti.sender}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Noti;
