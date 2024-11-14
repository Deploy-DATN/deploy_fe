import { faAngleLeft, faAngleRight, faLocationDot, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function HomeMotelNew() {
  const Tromoi = [
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
      name: "Tên dãy trọ 2",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 3",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 4",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 5",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 6",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
    {
      name: "Tên dãy trọ 7",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // Xác định dãy trọ hiển thị theo kiểu tuần hoàn
  const displayedTromoi = Array.from(
    { length: itemsPerPage },
    (_, i) => Tromoi[(currentIndex + i) % Tromoi.length]
  );

  // Hàm xử lý nút tiến (tuần hoàn)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Tromoi.length);
  };

  // Hàm xử lý nút lùi (tuần hoàn)
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Tromoi.length) % Tromoi.length
    );
  };

  return (
    <>
      <section className="home-show-motel-2 mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Trọ Mới</h2>
            <p>Phòng trọ tháng: </p>
          </div>
          <div className=" col-12 col-lg-6 d-flex justify-content-end">
            <div className="d-flex">
              <button
                type="button"
                className="btn-home-motel-slide-new rounded-circle me-2"
                onClick={handlePrev}
              >
                <i className="fa-light fa-angle-left icon-table-motel fa-lg" ></i> 
              </button>
              <button
                type="button"
                className="btn-home-motel-slide-new rounded-circle"
                onClick={handleNext}
              >
                <i className="fa-light fa-angle-right icon-table-motel fa-lg" ></i> 
              </button>
            </div>
          </div>
        </div>

        <div className="row motol-new-index">
          {displayedTromoi.map((motel, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-4 col-xl-3 mt-3">
              {/* Slider */}
              <div className="">
                <div
                  id={`carouselExampleIndicators-2-${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators mb-0">
                    {motel.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        type="button"
                        data-bs-target={`#carouselExampleIndicators-2-${index}`}
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
                    data-bs-target={`#carouselExampleIndicators-2-${index}`}
                    data-bs-slide="prev"
                  ></button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carouselExampleIndicators-2-${index}`}
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
      </section>
    </>
  );
}

export default HomeMotelNew;
