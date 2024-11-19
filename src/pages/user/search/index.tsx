import React from "react";
import "../search/search.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FilterSearch from "./compenent/filtersearch";

export const SearchMotel = () => {
  return (
    <>
      <Header />
      <div className="Search-motel-user pt-3 pb-5">
        <div className="container ">
          <section className="mt-3 link-search">
            <div className="d-flex breadcrumbs-wrap">
              <span className="span-link">
                {" "}
                <a href="/" className="a-link">
                  Trang chủ
                </a>
              </span>
              <span className="span-link"> /</span>
              <span className="span-link">
                {" "}
                <a href="/" className="a-link">
                  Tìm kiếm
                </a>
              </span>
            </div>
          </section>
          <section className="mt-3">
            <div className="box-header-search">
              <h1 className="box-title">
                CHO THUÊ PHÒNG TRỌ BUÔN MA THUỘC RẺ, MỚI NHẤT
              </h1>
            </div>
          </section>
          <section className="mt-3 main-motel-search">
            <div className="row">
              <section className="col-12 col-lg-9 pe-lg-3 pe-xl-4 row">
                <div className="list-motel-search col-12">
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
                      <div className="d-none d-sm-none d-md-none d-lg-block count">
                        <strong>Tổng (Số) kết quả </strong>
                      </div>
                      <div className="arrange">
                        <div className="arrange-label">Sắp xếp theo: </div>
                        <div className="arrange-select">
                          {" "}
                          <select
                            className="form-select px-2"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                          >
                            <option value="moinhat" selected>
                              Mới nhất
                            </option>
                            <option value="tangdan">Tăng dần</option>
                            <option value="giamdan">Giảm dần</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-lg-none d-sm-block d-md-block btn-filter">
                        <button
                          className="btn-filter-none"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#staticBackdrop"
                          aria-controls="staticBackdrop"
                        >
                          <h2 className="h2-filter-motel">
                            <i className="fa-solid fa-filter fa-lg"></i> Lọc kết
                            quả
                          </h2>
                        </button>
                        <div
                          className="offcanvas offcanvas-start"
                          data-bs-backdrop="static"
                          tabIndex={-1}
                          id="staticBackdrop"
                          aria-labelledby="staticBackdropLabel"
                        >
                          <div className="offcanvas-header">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            />
                          </div>
                          <div className="offcanvas-body">
                            <FilterSearch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-motel-filter-search col-12">
                    <div className="row">
                      {/* Lặp ở đây hub ta */}
                      <div className="col-12 mt-3">
                        <div className="item-list-motel row">
                          <div className="col-4 list-motel-img">
                            <a href="#" className="">
                              <img
                                src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_11/124_PhoCoDieu/124_PhoCoDieu_hinh4.png"
                                alt="Lỗi khi tải hình ảnh"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="col-8 list-motel-body">
                            <div className="motel-item-name">
                              <a href="#" className="motel-item-link">
                                <h3>
                                  Căn hộ Phòng ABC XYZ j j đó dcm - Quận 11 -
                                  TP. HCM bbbbbbbbbbbbb vvvvvvvvvvvvvvvvvvvv
                                  ccccccccccccccccc xxxxxxxxxxxxxx lllllllllllll
                                  mmmmmmmmmmm
                                </h3>
                              </a>
                            </div>
                            <div className="motel-item-price">
                              <small className="me-2">Từ</small>
                              <span>5.5 triệu/tháng</span>
                            </div>
                            <div className="motel-item-address">
                              <i className="fa-thin fa-location-dot fa-lg me-2"></i>
                              <p>
                                123 Hà Huy tập, tân lợi, TP BMT, Tỉnh đắk lắk
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="item-list-motel row">
                          <div className="col-4 list-motel-img">
                            <a href="#" className="">
                              <img
                                src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_11/124_PhoCoDieu/124_PhoCoDieu_hinh4.png"
                                alt="Lỗi khi tải hình ảnh"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="col-8 list-motel-body">
                            <div className="motel-item-name">
                              <a href="#" className="motel-item-link">
                                <h3>
                                  Căn hộ Phòng ABC XYZ j j đó dcm - Quận 11 -
                                  TP. HCM bbbbbbbbbbbbb vvvvvvvvvvvvvvvvvvvv
                                  ccccccccccccccccc xxxxxxxxxxxxxx lllllllllllll
                                  mmmmmmmmmmm
                                </h3>
                              </a>
                            </div>
                            <div className="motel-item-price">
                              <small className="me-2">Từ</small>
                              <span>5.5 triệu/tháng</span>
                            </div>
                            <div className="motel-item-address">
                              <i className="fa-thin fa-location-dot fa-lg me-2"></i>
                              <p>
                                123 Hà Huy tập, tân lợi, TP BMT, Tỉnh đắk lắk
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="item-list-motel row">
                          <div className="col-4 list-motel-img">
                            <a href="#" className="">
                              <img
                                src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_11/124_PhoCoDieu/124_PhoCoDieu_hinh4.png"
                                alt="Lỗi khi tải hình ảnh"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="col-8 list-motel-body">
                            <div className="motel-item-name">
                              <a href="#" className="motel-item-link">
                                <h3>
                                  Căn hộ Phòng ABC XYZ j j đó dcm - Quận 11 -
                                  TP. HCM bbbbbbbbbbbbb vvvvvvvvvvvvvvvvvvvv
                                  ccccccccccccccccc xxxxxxxxxxxxxx lllllllllllll
                                  mmmmmmmmmmm
                                </h3>
                              </a>
                            </div>
                            <div className="motel-item-price">
                              <small className="me-2">Từ</small>
                              <span>5.5 triệu/tháng</span>
                            </div>
                            <div className="motel-item-address">
                              <i className="fa-thin fa-location-dot fa-lg me-2"></i>
                              <p>
                                123 Hà Huy tập, tân lợi, TP BMT, Tỉnh đắk lắk
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-12 col-lg-3 ps-lg-3 ps-xl-4 d-none d-sm-none d-md-none d-lg-block">
                <FilterSearch />
              </section>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};