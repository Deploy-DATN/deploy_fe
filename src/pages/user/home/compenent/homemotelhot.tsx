import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMoneyBill,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
function HomeMotelHot() {
  //dữ liệu mẫu
  const motels = [
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
  ];

  return (
    <>
      <section className="home-show-motel-1 mt-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <h2>Phòng Trọ Nổi Bật</h2>
            <p>Những phòng trọ được nhiều người thuê</p>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
          </div>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6 mt-3">
            <button className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 active-filter-home-show rounded-pill">
              Trọ nổi bật
            </button>
            <button className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 rounded-pill">
              Trọ mới
            </button>
            <button className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 rounded-pill">
              Trọ sắp trả
            </button>
          </div>
        </div>
        <div className="row">
          {motels.map((motel, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-4 col-xl-3 mt-3">
              {/* Slider */}
              <div>
                <div
                  id={`carouselExampleIndicators-1-${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators mb-0">
                    {motel.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        type="button"
                        data-bs-target={`#carouselExampleIndicators-1-${index}`}
                        data-bs-slide-to={imgIndex}
                        className={imgIndex === 0 ? "active" : ""}
                        aria-label={`Slide ${imgIndex + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {motel.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${
                          imgIndex === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={img}
                          className="img-slider-home-motel"
                          alt="Motel"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carouselExampleIndicators-1-${index}`}
                    data-bs-slide="prev"
                  ></button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carouselExampleIndicators-1-${index}`}
                    data-bs-slide="next"
                  ></button>
                </div>
              </div>
              {/* Phần chữ */}
              <div className="mt-3">
                <h5 className="name-motel-home-1">{motel.name}</h5>
                <p className="dia-chi-motel-home-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    color="#6B7280"
                    className="icon-table-motel me-2"
                  />
                  {motel.address}
                </p>
                <span>
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    size="lg"
                    color="#6B7280"
                    className="icon-table-motel me-2"
                  />
                  {motel.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center ">
          <button className="btn mt-3 btn-create-notification btn-transform-y2 rounded-pill d-flex align-items-center">
            <FontAwesomeIcon
              icon={faSpinner}
              size="sm"
              color=""
              className="me-2 fa-spin"
            ></FontAwesomeIcon>
            Xem thêm
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeMotelHot;
