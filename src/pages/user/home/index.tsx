import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../home/home.scss";
import { faLocationDot, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import HomeMotelHot from "./compenent/homemotelhot";
import HomeMotelNew from "./compenent/homemotelnew";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const Home = () => {
  //motel nha

  return (
    <>
    <Header/>
      <div className="container">
        <section className="header-home">
          <div className="row ">
            <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex align-items-lg-center mt-3">
              <div className="w-100 w-lg-75">
                <h1 className="hero-text-header-home">
                  Tìm Kiếm và Thuê Phòng Uy Tín, Nhanh Chống
                </h1>
                <span className="hero-text-content-home text-justify">
                  Dịch vụ tìm phòng trọ trực quan, nhanh chóng. Đa dạng lựa
                  chọn, hỗ trợ từ tìm kiếm đến ký hợp đồng.
                </span>
                <br></br>
                <button className="btn mt-3 btn-create-notification btn-transform-y2 rounded-pill">
                  Tìm trọ ngay
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <img
                src="src/assets/images/backgrounds/Silehome.png"
                className="img-fluid "
              ></img>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-3">
            <div className="rounded-pill px-4 py-2  shadow-sm search-box">
              <div className="d-flex align-items-center">
                <div className=" position-section d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    color="#D1D5DB"
                    className="icon-table-motel"
                  />
                  <div className="ms-3  text-start">
                    <strong>Vị trí</strong>
                    <p className="small text-muted mb-0">
                      Bạn muốn tìm trọ ở đâu?
                    </p>
                  </div>
                </div>
                <div className="divider px-3">
                  <div className="line"></div>
                </div>
                <div className=" price-section d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBill1}
                    size="lg"
                    color="#D1D5DB"
                    className="icon-table-motel"
                  />
                  <div className="ms-3 text-start">
                    <strong>Giá thành</strong>
                    <p className="small text-muted mb-0">Chọn giá ngay!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeMotelHot />
        <HomeMotelNew />
        <section className="header-home mt-4">
          <div className="row ">
            <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex align-items-lg-center mt-3">
              <div className="w-100 w-lg-75">
                <h1 className="hero-text-header-home">
                  Tại sao bạn chọn chúng tôi?{" "}
                </h1>
                <span className="hero-text-content-home-2 text-justify">
                Trang web của chúng tôi tập trung phục vụ đúng nhu cầu của người cho thuê và người tìm phòng, với giao diện thân thiện và các tính năng tối ưu để quản lý tin đăng hiệu quả.
                </span>
                <br></br>
                <button className="btn  mt-3 btn-create-notification btn-transform-y2 rounded-pill">
                  Đọc thêm
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <img
                src="src/assets/images/backgrounds/img-home-bottom.png"
                className="img-fluid "
              ></img>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};
