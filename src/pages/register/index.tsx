import React, { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import style from './styles/register.module.scss';
import image from './image/SignUp.png';
import image1 from './image/SignUp(1).png';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Xác thực form với yup
const schema = yup.object().shape({
    username: yup.string().required("Họ và tên không được để trống")
                .matches(/^[a-zA-Z\s]*$/, "Họ và tên không chứa số hoặc ký tự đặc biệt"),
    email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
    phoneNumber: yup.string().matches(/^0\d{9}$/, "Số điện thoại không hợp lệ").required("Số điện thoại không được để trống"),
    password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu không được để trống"),
    terms: yup.bool().oneOf([true], "Bạn phải đồng ý với Điều khoản & Dịch vụ")
});

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "Customer",
    });
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreeTerms(e.target.checked);
    };

    const onSubmit = async (formData: any) => {
        if (!agreeTerms) {
            setMessage("Bạn phải đồng ý với Điều khoản & Dịch vụ để đăng ký.");
            return;
        }

        try {
            const response = await axios.post("https://localhost:7299/register", formData);
            if (response.status === 200) {
                setMessage("Đăng ký thành công!");
            }
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data.message || "Đăng ký thất bại. Vui lòng thử lại.");
            } else {
                setMessage("Đăng ký thất bại. Vui lòng thử lại.");
            }
            console.error("Error during registration:", error);
        }
    };

    return (
        <>
            <div className={clsx(style.container, "container-fluid d-flex align-items-center justify-content-center mt-5")}>
                <div className={clsx("row")}>
                    <div className={clsx("col-12 col-md-7 order-1 order-md-2 mt-5")}>
                        <div className={clsx(style.imageContainerBig)}>
                            <div className={clsx(style.imageContainer)}>
                                <img src={image1} alt="SignUp Image" className={clsx(style.smallImage)} />
                            </div>
                            <div className={clsx(style.imageContainer)}>
                                <img src={image} alt="SignUp Image" className={clsx(style.largeImage)} />
                            </div>
                        </div>
                    </div>

                    <div className={clsx("col-12 col-md-5 order-2 order-md-1 pt-5")}>
                        <div className={clsx(style.formSignUp)}>
                            <div className={clsx("card-body")}>
                                <h2 className={clsx("card-title", style.cardTitle)}>Đăng ký</h2>
                                <p>Đăng ký và khám phá cùng chúng tôi</p>
                            </div>
                            <form className={clsx("container")} onSubmit={handleSubmit(onSubmit)}>
                                {/* Trường Họ và Tên */}
                                <div className={clsx(style.text, "form-group")} style={{ minHeight: '80px' }}>
                                    <label htmlFor="username">Họ và Tên</label>
                                    <input
                                        type="text"
                                        className={clsx(style.box, "form-control")}
                                        id="username"
                                        placeholder="Vui lòng nhập Họ và Tên"
                                        {...register("username")}
                                    />
                                    {errors.username && <div className={clsx(style.textdanger)}>{errors.username.message}</div>}
                                </div>

                                {/* Trường Số Điện Thoại */}
                                <div className={clsx(style.text, "form-group")} style={{ minHeight: '80px' }}>
                                    <label htmlFor="phoneNumber">Số Điện Thoại</label>
                                    <input
                                        type="text"
                                        className={clsx(style.box, "form-control")}
                                        id="phoneNumber"
                                        placeholder="Vui lòng nhập số điện thoại"
                                        {...register("phoneNumber")}
                                    />
                                    {errors.phoneNumber && <div className={clsx(style.textdanger)}>{errors.phoneNumber.message}</div>}
                                </div>

                                {/* Trường Email */}
                                <div className={clsx(style.text, "form-group")} style={{ minHeight: '80px' }}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={clsx(style.box, "form-control")}
                                        id="email"
                                        placeholder="Vui lòng nhập email"
                                        {...register("email")}
                                    />
                                    {errors.email && <div className={clsx(style.textdanger)}>{errors.email.message}</div>}
                                </div>

                                {/* Trường Mật Khẩu */}
                                <div className={clsx(style.text, "form-group")} style={{ minHeight: '80px' }}>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input
                                        type="password"
                                        className={clsx(style.box, "form-control")}
                                        id="password"
                                        placeholder="Vui lòng nhập mật khẩu"
                                        {...register("password")}
                                    />
                                    {errors.password && <div className={clsx(style.textdanger)}>{errors.password.message}</div>}
                                </div>

                                {/* Checkbox Điều Khoản */}
                                <div className={clsx(style.text)}>
                                    <div className={clsx(style.checkboxContainer)}>
                                        <input
                                            type="checkbox"
                                            className={clsx(style.checkbox)}
                                            checked={agreeTerms}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label>
                                            Đồng ý với <a href="#">Điều khoản & Dịch vụ</a>
                                        </label>
                                    </div>
                                </div>

                                {/* Nút Đăng Ký */}
                                <div className={clsx(style.text)}>
                                    <button type="submit" className={clsx(style.buttonSubmit)}>
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
                            
                            {/* Thông báo lỗi hoặc thành công */}
                            {message && (
                                <div className={clsx(style.textdanger)}>
                                    <p className={message.includes("thành công") ? "text-success" : "text-danger"}>{message}</p>
                                </div>
                            )}

                            <div className={clsx(style.text)}>
                                <p>
                                    <label>
                                        Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
