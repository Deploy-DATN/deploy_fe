import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'; // Icon từ gói solid
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Icon từ gói brands
import "./styles/footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid bgr-img-footer py-5">
      footer
      <div className="container">
        <div className="bg-light p-4 rounded-3">
            <div className="row px-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                  <h6 className="h6-footer">Cung cấp và cho thuê phòng trọ</h6>
                  <p className="p-footer-form">Tham gia vào cộng đồng Thỏ Stay của chúng tôi</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                  <form className="Form-footer-submit">
                  <input className="form-control rounded-2 input-bgr-footer" placeholder="Nhập địa chỉ email của bạn"></input>
                  <button className="btn btn-primary rounded-2 button-bgr-footer">Đăng ký ngay</button>
                  </form>
               </div>
            </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-between">
            <div className="colum-footer-1 margin-footer-mobie-1 col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3 text-center text-md-start text-lg-start text-xl-start text-xxl-start">
              <img width="100px" src="../src/assets/images/logo.png" alt=""/>
              <p className="p-footer-tieusu mt-2">Thỏ Stay luôn đặt mục tiêu mang đến cho khách hàng không gian sống tiện nghi, sạch sẽ, giá cả hợp lý, phù hợp cho sinh viên và người lao động tìm kiếm nơi an cư lâu dài.</p>
              <div className="d-flex justify-content-center  justify-content-md-start justify-content-xl-start justify-content-lg-start justify-content-xxl-start">
                <div className="icon-footer-col-1 mx-2">
                <FontAwesomeIcon icon={faFacebookF} size="lg" color="#138086" />
                </div>
                <div className="icon-footer-col-1 mx-2">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="#138086" />
                </div>
                <div className="icon-footer-col-1 mx-2">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="#138086" />
                </div>
                <div className="icon-footer-col-1 mx-2">
                <FontAwesomeIcon icon={faYoutube} size="lg" color="#138086" />
                </div>
                
              </div>
            </div>
            <div className="colum-footer-1 col-6 col-sm-6 col-md-5 col-lg-5 col-xl-2 col-xxl-2 text-start text-md-start text-lg-start text-xl-start text-xxl-start">
              <h3 className="h3-footer-quick">Quick Links</h3>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="my-2"><a className="a-footer-quick" href="#">HomePage</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">All Listings</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">All Location</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Package</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Contact Us</a></li>
                </ul>
              </div>
              </div>
              <div className="colum-footer-1 col-6 col-sm-6 col-md-5 col-lg-5 col-xl-2 col-xxl-2 text-start text-md-start text-lg-start text-xl-start text-xxl-start">
              <h3 className="h3-footer-quick">Services</h3>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="my-2"><a className="a-footer-quick" href="#">Duplex House</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Guest House</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Apartment</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Hotels</a></li>
                  <li className="my-2"><a className="a-footer-quick" href="#">Plaza</a></li>
                </ul>
              </div>
              </div>
              <div className="colum-footer-1 col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3 text-start text-md-start text-lg-start text-xl-start text-xxl-start">
              <h3 className="h3-footer-quick">Get In Touch</h3>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className=" a-footer-quick d-flex justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                    <FontAwesomeIcon className="me-2" icon={faPhone} size="lg" color="#138086" /> <p> +(84)9653812674</p>
                  </li>
                  <li className=" a-footer-quick d-flex justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                  <FontAwesomeIcon className="me-2" icon={faEnvelope} size="lg" color="#138086" /> <p>thostay@gmail.com</p> 
                  </li>
                  <li className=" a-footer-quick d-flex justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                  <FontAwesomeIcon className="me-2" icon={faGlobe} size="lg" color="#138086" /> <p>thostay.com</p>

                  </li>
                  <li className=" a-footer-quick d-flex justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                  <FontAwesomeIcon className="me-2" icon={faLocationDot} size="lg" color="#138086" /> <p>300 Hà Huy Tập, Tân An, TP-Buôn Ma Thuộc, Đắk Lắk</p>
                  </li>
                </ul>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
