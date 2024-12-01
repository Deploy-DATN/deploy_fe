import React from "react";

const Package = () => {
  const packages = [
    {
      id: 1,
      name: "Tài khoản Vip 1",
      description: "Mô tả tài khoản Vip 1 có tối đa 20 phòng và 2 dãy",
      price: 100000,
      createDate: "2024-11-29",
      limitMotel: 2,
      limitRoom: 20,
      status: true,
    },
    {
      id: 2,
      name: "Tài khoản Vip 2",
      description: "Mô tả tài khoản Vip 1 có tối đa 25 phòng và 3 dãy",
      price: 200000,
      createDate: "2024-11-28",
      limitMotel: 3,
      limitRoom: 25,
      status: false,
    },
    {
      id: 3,
      name: "Tài khoản Vip 3",
      description: "Mô tả tài khoản Vip 1 có tối đa 20 phòng và 2 dãy",
      price: 300000,
      createDate: "2024-11-27",
      limitMotel: 4,
      limitRoom: 30,
      status: true,
    },
    {
      id: 4,
      name: "Tài khoản Vip 4",
      description: "Mô tả tài khoản Vip 1 có tối đa 20 phòng và 2 dãy",
      price: 400000,
      createDate: "2024-11-26",
      limitMotel: 5,
      limitRoom: 35,
      status: true,
    },
    {
      id: 5,
      name: "Tài khoản Vip 5",
      description: "Mô tả tài khoản Vip 1 có tối đa 20 phòng và 2 dãy",
      price: 500000,
      createDate: "2024-11-25",
      limitMotel: 6,
      limitRoom: 40,
      status: true,
    },
  ];

  return (
    <>
      <div className="container-fluid package-owner">
        <div className="row align-items-stretch">
          <div className=" w-100 p-4">
            <div className="package-header">
              <h3 className="h3-package-user-owner">Tài khoản Vip</h3>
              <p className="p-package-user-owner">
                Tài khoản Vip dành riêng cho các chủ trọ muốn tối ưu hóa hiệu
                quả quản lý bất động sản. Với tài khoản Vip, bạn sẽ được tăng
                giới hạn số lượng phòng trọ và dãy trọ tối đa, giúp bạn mở rộng
                quy mô kinh doanh một cách linh hoạt và tiện lợi hơn. Nâng cấp
                ngay để trải nghiệm các lợi ích vượt trội!{" "}
              </p>
            </div>
            <div className="package-body">
              <div className="d-flex flex-wrap gap-3">
                {packages.map((packagemap) => (
                  <div className="package-body-item shadow-sm">
                    <div className="package-body-header">
                      <div className="package-body-name">
                        <i className="fa-light fa-crown fa-lg me-2"></i>
                        <h3 className="package-body-name-h3">
                          {packagemap.name}
                        </h3>
                      </div>
                      <div className="package-body-room">
                        <i className="fa-regular fa-building fa-sm"></i>
                        <p>Tối đa {packagemap.limitRoom} phòng</p>
                      </div>
                      <div className="package-body-room">
                        <i className="fa-light fa-synagogue fa-sm"></i>
                        <p>Tối đa {packagemap.limitMotel} dãy</p>
                      </div>
                      <div className="package-body-price">
                            <h3>{Number(packagemap.price).toLocaleString('vi-VN')} đ</h3>
                      </div>
                      <div className="package-body-time">Vĩnh viễn</div>
                      {/* <div className="package-body-time">(Không bao gồm thuế VAT)</div> */}
                      <div>
                        <button className="btn btn-create-notification btn-transform-y2 mt-3">Mua ngay</button>
                      </div>
                    </div>
                    <div className="package-gach"></div>
                    <div className="package-body-footer">
                      <div className="package-body-description">
                          <p>{packagemap.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
