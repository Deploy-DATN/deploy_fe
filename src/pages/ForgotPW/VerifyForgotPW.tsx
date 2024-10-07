import React, { useEffect, useRef, useState } from 'react';
import "./styles/ForgotPW.scss";
import { Otp, getOtpApi } from '@/services/api/authApi';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const VerifyForgotPWForm = () => {
  const { handleSubmit } = useForm<Otp>();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpValues, setOtpValues] = useState<string[]>(['', '', '', '']); // Trạng thái để lưu giá trị 4 ô input
  const [countdown, setCountdown] = useState(() => {
    const savedTime = localStorage.getItem('countdown');
    return savedTime ? parseInt(savedTime, 10) : 180; // Nếu có thời gian đã lưu, sử dụng nó; nếu không, mặc định là 180 giây
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          localStorage.removeItem('countdown'); // Xóa thời gian khi đếm xong
          return 0; // Ngăn không cho giá trị âm
        }
        const newTime = prev - 1;
        localStorage.setItem('countdown', newTime.toString()); // Lưu thời gian còn lại vào localStorage
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer); // Dọn dẹp timer
      localStorage.setItem('countdown', countdown.toString()); // Lưu thời gian khi component bị hủy
    };
  }, [countdown]);

  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Cập nhật giá trị của ô input tương ứng
    setOtpValues(prev => {
      const newOtpValues = [...prev];
      newOtpValues[index] = value;
      return newOtpValues;
    });

    // Chuyển đến ô input kế tiếp hoặc ô input trước
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = async () => {
    const otpString = otpValues.join('');
    console.log(otpString)
    const data: Otp = { otp: otpString }; // Cấu trúc dữ liệu tùy thuộc vào API của bạn
    console.log(data)
    const response = await getOtpApi(data)
    console.log(response);
    console.log(data);
    if (response.data === true) {
      alert('Nhập otp thành công!!');

    } else {
      alert('Otp không đúng!!');
    }

  };

  return (
    <div className="formverifyfw container-fluid">
      <div className="row align-items-center w-100 align-items-center h-forgotpw">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center px-0">
            <div className='w-75 d-flex flex-column align-items-center'>
              <h2 className='h2-QMK'>Xác minh</h2>
              <p className='color-xam'>Vui lòng nhập mã được gửi đến số điện thoại của bạn</p>

              <div className="d-flex justify-content-between mb-3 mt-4">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    name='otp'
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
              <p className='color-xam'>Bạn chưa nhận được mã? <a href="#" className='dangky-color'>Gửi lại</a></p>
              <button type="submit" className="btn btn-color w-100 rounded-pill text-white heightinput-60 mt-4">Tiếp tục</button>
            </div>
          </div>
        </form>

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
