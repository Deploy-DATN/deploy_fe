import { getMotelByIdApi } from "@/services/api/MotelApi";
import { API } from "@/services/apiConfig";
import { MotelByIdDTO } from "@/services/Dto/MotelDto";
import {
  faBolt,
  faCalendarCheck,
  faCalendarPlus,
  faCalendarXmark,
  faDroplet,
  faFileAlt,
  faFileExcel,
  faFilePdf,
  faFileWord,
  faLocationDot,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productImage from "src/pages/admin/assets/images/products/s1.jpg";

export const Infomotel = () => {
  const { id } = useParams();
  const [dataMotel, setDataMotel] = useState<MotelByIdDTO>();

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    const response = await getMotelByIdApi(id);
    setDataMotel(response);
    console.log(response);
  };

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
          Chờ duyệt
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
          Đăng hoạt động
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
          Ngừng hoạt động
        </span>
      );
    } else if (status === 4) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
          Từ chối
        </span>
      );
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4 info-motel">
              <div className="w-100 text-start">
                <h2 className="h2-info-motel">
                  Chi Tiết Dãy Trọ {dataMotel?.name}
                </h2>
                <h5 className="mt-2">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color="#0B1A46"
                    size="lg"
                    className="icon-table-motel"
                  />{" "}
                  {dataMotel?.address}
                </h5>
              </div>
              <form className="form-motel-info">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 form-group mt-3 px-2">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src={productImage}
                            className="d-block w-100"
                          ></img>
                        </div>
                        <div className="carousel-item">
                          <img
                            src={productImage}
                            className="d-block w-100"
                            alt="..."
                          ></img>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://i.pinimg.com/1200x/e7/ee/ba/e7eeba5f1d10008b83cd45b4516a689d.jpg"
                            className="d-block w-100"
                            alt="..."
                          ></img>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 form-group mt-3 px-2">
                    <div className="text-infomotel">
                      <h2 className="h2-info-motel ">Thông Tin Chi Tiết</h2>
                      <h4 className="text-infomotel-c2 d-flex align-items-center mt-3">
                        Tên chủ trọ:
                        <span className="text-infomotel-c3">
                          {dataMotel?.owner.fullName}
                        </span>
                      </h4>
                      <table className="mt-2 text-nowrap">
                        <tbody>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                <FontAwesomeIcon
                                  icon={faBolt}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                />
                                Giá điện:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.price.electric}
                              </span>
                            </td>
                            <td>
                              <h4 className="text-infomotel-c2">
                                Giá điện mới:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.lastPrice?.electric}
                              </span>
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                <FontAwesomeIcon
                                  icon={faDroplet}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                />
                                Giá nước:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.price.water}
                              </span>
                            </td>
                            <td>
                              <h4 className="text-infomotel-c2">
                                Giá nước mới:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.lastPrice?.water}
                              </span>
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                {/* <FontAwesomeIcon
                                  icon={faMoneyBill}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                /> */}
                                Chi phí khác:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.price.other}
                              </span>
                            </td>
                            <td>
                              <h4 className="text-infomotel-c2">
                                Chi phí khác mới:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {dataMotel?.lastPrice?.other}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="text-nowarp">
                        <tbody>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                {/* <FontAwesomeIcon
                                  icon={faCalendarPlus}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                /> */}
                                Ngày tạo:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {new Date(
                                  dataMotel?.createDate || ""
                                ).toLocaleDateString("vi-VN", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                {/* <FontAwesomeIcon
                                  icon={faCalendarCheck}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                /> */}
                                Ngày duyệt:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {new Date(
                                  dataMotel?.createDate || ""
                                ).toLocaleDateString("vi-VN", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                {/* <FontAwesomeIcon
                                  icon={faCalendarXmark}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                /> */}
                                Ngày hết hạn:
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
                                {new Date(
                                  dataMotel?.createDate || ""
                                ).toLocaleDateString("vi-VN", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </td>
                          </tr>
						  <tr className="align-middle">
                            <td>
                              <h4 className="text-infomotel-c2">
                                {/* <FontAwesomeIcon
                                  icon={faCalendarXmark}
                                  color="#0B1A46"
                                  size="sm"
                                  className="icon-table-motel me-2"
                                /> */}
                                Trạng thái
                              </h4>
                            </td>
                            <td>
                              <span className="text-infomotel-c3">
							  {CheckStatus(dataMotel?.status || 0)}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h4 className="text-infomotel-c2 d-flex align-items-center mt-3">
                        Giấy tờ liên quan:
						{dataMotel?.images?.map((image) => (                          <div
                            key={image.id}
                            className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3 position-relative"
                          >
                            {/* Hiển thị icon hoặc tên file */}
                            {image.link.includes("image") ? (
                              <img
                                src={image.link}
                                className="rounded-img-info-model img-fluid"
                                alt="Không có ảnh"
                              />
                            ) : (
                              <div className="file-display position-absolute h-100 w-100">
                                {/* Hiển thị icon tương ứng với từng loại file */}
                                {image.link.includes("pdf") && (
                                  <FontAwesomeIcon
                                    icon={faFilePdf}
                                    className="file-icon"
                                    size="2x"
                                  />
                                )}
                                {image.link.includes("word") && (
                                  <FontAwesomeIcon
                                    icon={faFileWord}
                                    className="file-icon"
                                    size="2x"
                                  />
                                )}
                                {image.link.includes("excel") && (
                                  <FontAwesomeIcon
                                    icon={faFileExcel}
                                    className="file-icon"
                                    size="2x"
                                  />
                                )}
                                {!image.link.includes("pdf") &&
                                  !image.link.includes("word") &&
                                  !image.link.includes("excel") && (
                                    <FontAwesomeIcon
                                      icon={faFileAlt}
                                      className="file-icon"
                                      size="2x"
                                    />
                                  )}
                                {/* Tên file */}
                                <p className="file-name mb-0">{image.link}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </h4>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
