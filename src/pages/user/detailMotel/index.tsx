import React, { useState } from "react";
import "../detailMotel/detaimotel.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLocationDot, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export const DetailMotelUser = () => {
  const motels = [
    {
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
        "https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2024/06/02/16/56/minimalism-8804667_1280.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj64rr7VM1h6_Aln1LMnUvFLq9ZQ_1dpIlg&s",
        "https://img.pikbest.com/wp/202345/pretty-very-room_9587397.jpg!w700wp",
        "https://cdn.pixabay.com/video/2024/03/21/205001-926015670_tiny.jpg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Số ảnh nhỏ hiển thị tối đa mỗi lần

  const displayedImages = Array.from({ length: itemsPerPage }).map((_, i) => {
    const index = (currentIndex + i) % motels[0].images.length;
    return motels[0].images[index];
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % motels[0].images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + motels[0].images.length) % motels[0].images.length
    );
  };

  return (
    <>
      <Header />
      <div className="bgr-detail-motel-user">
        <div className="container pt-4">
          <section className="">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-9">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-inner img-detail-motel-user-slide">
                    {motels[0].images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={image}
                          className="d-block w-100"
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="carousel-indicators-container mt-3 d-flex">
                    {/* Hiển thị ảnh tuần hoàn */}
                    <button onClick={handlePrev} className="btn-prev">
                      <i className="fa-light fa-angle-left"></i>
                    </button>
                    {displayedImages.map((image, index) => {
                      const actualIndex =
                        (currentIndex + index) % motels[0].images.length; // Tính chỉ số thực
                      return (
                        <img
                          key={index}
                          src={image}
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={actualIndex} // Sử dụng chỉ số thực
                          alt={`Slide ${actualIndex + 1}`}
                          className="indicator mx-1"
                        />
                      );
                    })}
                    <button onClick={handleNext} className="btn-next">
                      <i className="fa-light fa-angle-right"></i>
                    </button>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  ></button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  ></button>
                </div>
                <div className="mt-4 bgr-detail-motel-text-user p-4 ">
                    <h2 className="name-detail-motel-user">name trọ</h2>
                    {/* Code phần dưới img ở đây là dc */}
                    <div className="d-flex mt-3 align-items-center">
                    <h3 className="me-3 mb-0 price-detail-motel-user">1,000,000 / tháng</h3><FontAwesomeIcon icon={faCircle} size="sm" color="#0B1A46" className="me-3"/> <h3 className=" mb-0 area-detail-motel-user">22M<sup>2</sup></h3>
                    </div>
                    <h5 className="mt-3 mb-0 text-deltail-motel-user"><i className="fa-light fa-location-dot me-1"></i>105/3 Hà Huy Tập, phường Tân Lập, thành phố Buôn Ma Thuột </h5>
                    <h5 className="mt-3 mb-0 text-deltail-motel-user"><i className="fa-light fa-clock me-1"></i>Cập nhật 1 tuần trước</h5>
                    <h4 className="mt-5 mb-0 motachitiet-deltail-motel-user">
                        Mô tả chi tiết
                    </h4>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-3 ">
                {/* Code phần chủ trọ vô đây */}
                <div className="bgr-detail-motel-user p-4">
                    <div className="row">
                        <div className="col-3 width-height">
                            <img src="https://png.pngtree.com/png-vector/20240131/ourlarge/pngtree-circle-greek-frame-round-meander-border-decoration-pattern-png-image_11520606.png" alt="user-avatar" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-9 text-nowrap overflow-hidden">
                            <h5>Nguyễn ngọc bảo anh</h5>
                            <h6 className="color-xam">nguyengocbaoah@gmail.com</h6>
                        </div>
                    </div>
                    <div>
                        <p className="text-detail-motel-user">Tổng dãy trọ có trên <a href="#" className="header-thotay">Thỏ Stay</a>: 2</p>
                    </div>
                    <div>
                        <button className="btn mt-3 btn-create-notification btn-transform-y2 rounded-3 w-100">
                            0926485724
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            {/* code phần trọ tương tự ở đây 
            có thể copy từ homemotelnew */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
