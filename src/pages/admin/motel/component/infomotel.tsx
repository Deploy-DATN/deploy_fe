import productImage from "src/pages/admin/assets/images/products/s1.jpg";

export const Infomotel = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4 info-motel">
            <div className="w-100 text-center">
              <h2 className="h2-info-motel">Chi Tiết</h2>
            </div>
            <form className="form-motel-info">
              <div className="d-flex flex-wrap">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Họ và tên chủ trọ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Họ tên"
                  />
                </div>{" "}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Địa chỉ"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Trạng thái
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Trạng thái"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Diện tích
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Diện tích"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Giá
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Giá"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Số phòng
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Số phòng"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Ngày bắt đầu
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder=""
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Ngày hết hạn
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder=""
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Ngày đăng ký
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder=""
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Giá điện
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="99999999"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Giá nước
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="2222"
                  />
                </div>
                <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Hình ảnh
                  </label>
                  <div className="row flex-wrap">
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>

 
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomotel;
