import React, { useState } from 'react';
import "../styles/ForgotPW.scss";

const NewPW = () => {
  const [showPasswordCf, setShowPasswordCf] = useState(false);

  return (
    <div className="mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 ">
            <div className='w-100  d-flex flex-column align-items-center'>
            <h2 className='h2-QMK'>Mật khẩu mới</h2>
          <form className="w-75 mt-4">
            <div className="mb-2">
              <label htmlFor="password" className="form-label color-sdt">Mật khẩu mới: </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder='Gồm 8 ký tự, có chứa ký tự đặc biệt và ký tự số'
                className='form-control rounded-pill heightinput-60 boder-color color-pla'
              />
            </div>
            <div className="mb-4">
                <label htmlFor="passwordcf" className="form-label color-sdt">Xác nhận mật khẩu: </label>
                <div className='d-flex align-items-center justify-content-end'>
                <input
                  type={showPasswordCf ? "text" : "password"}
                  id="passwordcf"
                  autoComplete="off"
                  placeholder='Vui lòng nhập lại mật khẩu'
                  className='form-control rounded-pill heightinput-60 boder-color color-pla'
                />
                <i
                  className={`fa-solid ${showPasswordCf ? 'fa-eye-slash' : 'fa-eye'} icon-password`}
                  onClick={() => setShowPasswordCf(!showPasswordCf)}
                ></i>
                </div>
              </div>

            <button type="submit" className="btn heightinput-60 btn-color w-100 mb-3 rounded-pill text-white mt-4 ">Xác nhận</button>
          </form>
            </div>

        </div>

        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
          <img 
            src="src/assets/images/imgforgotPW/Forgotpw_3_1.png" 
            alt="Responsive" 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export default NewPW;