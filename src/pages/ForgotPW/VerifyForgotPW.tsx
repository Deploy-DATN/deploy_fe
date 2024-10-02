import React, { useEffect, useRef, useState } from 'react';
import "./styles/ForgotPW.scss";

const VerifyForgotPWForm = () => {

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [countdown, setCountdown] = useState(() => {
    const savedStartTime = localStorage.getItem('startTime');
    const now = Date.now();
    const elapsedTime = savedStartTime ? Math.floor((now - parseInt(savedStartTime, 10)) / 1000) : 0;
    return Math.max(180 - elapsedTime, 0); // 180 giây là 3 phút, trừ đi thời gian đã trôi qua
  });

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          const newCountdown = prev - 1;
          if (newCountdown <= 0) {
            clearInterval(timer);
            localStorage.removeItem('startTime');
            return 0;
          }
          return newCountdown;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) {
      const startTime = Date.now();
      localStorage.setItem('startTime', startTime.toString());
    }
  }, [countdown]);

  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');

  //sử lý khi nhập input mã OTP
  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.target.value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //nút gửi lại
  const handleResend = () => {
    setCountdown(180);
    const startTime = Date.now();
    localStorage.setItem('startTime', startTime.toString());
  };

  return (
    <div className="formverifyfw container-fluid">
      <div className="row align-items-center w-100 align-items-center h-forgotpw">
      <div className="col-lg-6 col-12 d-flex flex-column align-items-center px-0">
          <div className='w-75 d-flex flex-column align-items-center'>
            <h2 className='h2-QMK'>Xác minh</h2>
            <p className='color-xam'>Vui lòng nhập mã được gửi đến 0123456789</p>

            <div className="d-flex justify-content-between mb-3 mt-4">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="form-control text-center mx-1 rounded-circle input-xacminh"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && index > 0 && e.currentTarget.value === '') {
                      inputRefs.current[index - 1]?.focus();
                    }
                  }}
                />
              ))}
            </div>

            <div className="mb-3">
              <p className="time-text">{minutes}:{seconds}</p>
            </div>

            <p className='color-xam'>
              Bạn chưa nhận được mã? <a href="#" className='dangky-color' onClick={handleResend}>Gửi lại</a>
            </p>

            <button type="submit" className="btn btn-color w-100 rounded-pill text-white heightinput-60 mt-4">Tiếp tục</button>
          </div>
        </div>

        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center px-0">
          <img
            src="src/assets/images/imgforgotPW/forgotpw_2_1.png"
            alt="Responsive"
            className="img-fluid image-verify"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyForgotPWForm;
