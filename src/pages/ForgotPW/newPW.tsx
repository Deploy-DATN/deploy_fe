import React, { useState } from 'react';
import "./styles/ForgotPW.scss";

const NewPW = () => {
  const [password, setPassword] = useState('');
  const [passwordCf, setPasswordCf] = useState('');
  const [showPasswordCf, setShowPasswordCf] = useState(false);
  const [errorpw, setErrorpw] = useState('');
  const [errorpwcf, setErrorpwcf] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!password) {
      setErrorpw('Bạn chưa nhập mật khẩu mới');
      setErrorpwcf('');
    } else if (password.length < 8 || !/[!@#$%^&*]/.test(password) || !/\d/.test(password)) {
      setErrorpw('Mật khẩu phải có ít nhất 8 ký tự, chứa ký tự đặc biệt và số');
      setErrorpwcf('');
    } else if (password !== passwordCf) {
      setErrorpw('');      
      setErrorpwcf('Mật khẩu xác thực không giống với mật khẩu');
    } else {
      setErrorpwcf('');
      setErrorpw('');      
      // xử lý khi đúng hết lỗi
    }
  };

  return (
    <div className="mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 ">
          <div className='w-100 d-flex flex-column align-items-center'>
            <h2 className='h2-QMK'>Mật khẩu mới</h2>
            <form className="w-75 mt-4" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="password" className="form-label color-sdt">Mật khẩu mới: </label>
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  inputMode="numeric"
                  placeholder='Gồm 8 ký tự, có chứa ký tự đặc biệt và ký tự số'
                  className='form-control rounded-pill heightinput-60 boder-color color-pla'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorpw && <div className="text-danger mt-1">{errorpw}</div>}
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
                    value={passwordCf}
                    onChange={(e) => setPasswordCf(e.target.value)}
                  />
                  <i
                    className={`fa-solid ${showPasswordCf ? 'fa-eye-slash' : 'fa-eye'} icon-password`}
                    onClick={() => setShowPasswordCf(!showPasswordCf)}
                  ></i>
                </div>
                {errorpwcf && <div className="text-danger mt-1">{errorpwcf}</div>}
              </div>

              <button type="submit" className="btn heightinput-60 btn-color w-100 mb-3 rounded-pill text-white mt-4">Xác nhận</button>
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