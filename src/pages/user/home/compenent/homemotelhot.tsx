import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoomType, getOutstandingMotelApi, getNewMotelApi } from '@/services/api/HomeApi';
import {
  faLocationDot,
  faMoneyBill,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function HomeMotelHot() {
  const [motels, setMotels] = useState<RoomType[]>([]);
  const [selectedType, setSelectedType] = useState<'outstanding' | 'new'>('outstanding'); // Trạng thái chọn loại trọ
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMotels = async () => {
      try {
        let response;
        if (selectedType === 'outstanding') {
          response = await getOutstandingMotelApi({ id: 0, price: 0, name: "", address: "", images: [] });
        } else if (selectedType === 'new') {
          response = await getNewMotelApi({ id: 0, price: 0, name: "", address: "", images: [] });
        }
        if (response && response.data) {
          setMotels(response.data);
        }
      } catch (error) {
        console.error(`Failed to fetch ${selectedType} motels:`, error);
      }
    };
    fetchMotels();
  }, [selectedType]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };
  const handleMotelClick = (id: number) => {
    navigate(`/detailmoteluser/${id}`); // Navigate to the motel detail page using its ID
  };


  return (
    <section className="home-show-motel-1 mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-lg-6 ">
          <h2 className="mb-0">PHÒNG TRỌ NỔI BẬT</h2>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-lg-end align-items-center">
          <button
            className={`btn btn-filter btn-sm px-3 py-2 mx-2 btn-transform-y2 rounded-pill ${selectedType === 'outstanding' ? 'active-filter-home-show' : ''
              }`}
            onClick={() => setSelectedType('outstanding')}
          >
            Trọ nổi bật
          </button>
          <button
            className={`btn btn-filter btn-sm px-3 py-2 mx-2 btn-transform-y2 rounded-pill ${selectedType === 'new' ? 'active-filter-home-show' : ''
              }`}
            onClick={() => setSelectedType('new')}
          >
            Trọ mới
          </button>
        </div>
      </div>
      <div className="row">
        {motels && motels.length > 0 && motels.map((roomtype, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-4 col-xl-3 mt-3" onClick={() => handleMotelClick(roomtype.id)}>
            <div >
              <div
                id={`carouselExampleIndicators-${roomtype.id}`}
                className="carousel slide"
                data-bs-ride="carousel"

              >
                <div className="carousel-indicators mb-0"  >
                  {roomtype.images && roomtype.images.length > 0 && roomtype.images.map((_, imgIndex) => (
                    <button
                      key={`${imgIndex}`}
                      type="button"
                      data-bs-target={`#carouselExampleIndicators-${roomtype.id}`}
                      data-bs-slide-to={imgIndex}
                      className={imgIndex === 0 ? "active" : ""}
                      aria-label={`Slide ${imgIndex + 1}`}

                    > </button>

                  ))}
                </div>
                <div className="carousel-inner rounded-4">
                  {roomtype.images && roomtype.images.length > 0 && roomtype.images.map((img, imgIndex) => (
                    <div
                      key={`${imgIndex}`}
                      className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                    >
                      <img
                        src={img.link || "#"}
                        className="img-slider-home-motel"
                        alt={`RoomType ${imgIndex + 1} Image ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="name-motel-home-1">{roomtype.name || "N/A"}</h5>
              <p className="dia-chi-motel-home-1">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  color="#6B7280"
                  className="icon-table-motel me-2"
                />
                {roomtype.address || "Address not available"}
              </p>
              <span className="t">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  size="lg"
                  color="#6B7280"
                  className="icon-table-motel me-2"
                />
                {formatPrice(roomtype.price)} vnđ
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn mt-3 btn-create-notification btn-transform-y2 rounded-pill d-flex align-items-center">
          <FontAwesomeIcon
            icon={faSpinner}
            size="sm"
            className="me-2 fa-spin"
          />
          Xem thêm
        </button>
      </div>
    </section>
  );
}

export default HomeMotelHot;
