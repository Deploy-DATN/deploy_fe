import React, { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import style from './styles/register.module.scss';
import image from './image/SignUp.png';
import image1 from './image/SignUp(1).png';


const Register = () => {
    // State để lưu thông tin form
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "Customer",
    });

    // State để hiển thị thông báo lỗi hoặc thành công
    const [message, setMessage] = useState("");

    // Xử lý sự thay đổi của các trường nhập liệu
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value, // Cập nhật state dựa trên id của input
        });
    };

    // Xử lý khi form được submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://localhost:7299/register", formData);
            if (response.status === 200) {
                setMessage("Đăng ký thành công!");
            }
        } catch (error) {
            setMessage("Đăng ký thất bại. Vui lòng thử lại.");
            console.error("Error during registration:", error);
        }
    };
    return (
        <>
            <div className={clsx(style.container, "container-fluid d-flex align-items-center justify-content-center mt-5")}>
                <div className={clsx("row")}>
                    {/* Cột hình ảnh, đổi thứ tự trên màn hình nhỏ */}
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

                    {/* Cột form đăng ký, đổi thứ tự trên màn hình nhỏ */}
                    <div className={clsx("col-12 col-md-5 order-2 order-md-1 pt-5")}>
                        <div className={clsx(style.formSignUp)}>
                            <div className={clsx("card-body")}>
                                <h2 className={clsx("card-title", style.cardTitle)}>Đăng ký</h2>
                                <p>Đăng ký và khám phá cùng chúng tôi</p>
                            </div>
                            <form action="" className={clsx("container")} onSubmit={handleSubmit}>
                                <div className={clsx(style.text, "form-group")}>
                                    <label htmlFor="username">Họ và Tên</label>
                                    <input
                                        type="text"
                                        className={clsx(style.box, "form-control")}
                                        id="username"
                                        placeholder="Vui lòng nhập Họ và Tên"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={clsx(style.text, "form-group")}>
                                    <label htmlFor="phonenumber">Số Điện Thoại</label>
                                    <input
                                        type="text"
                                        className={clsx(style.box, "form-control")}
                                        id="phoneNumber"
                                        placeholder="Vui lòng nhập số điện thoại"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={clsx(style.text, "form-group")}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={clsx(style.box, "form-control")}
                                        id="email"
                                        placeholder="Vui lòng nhập email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={clsx(style.text, "form-group")}>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input
                                        type="password"
                                        className={clsx(style.box, "form-control")}
                                        id="password"
                                        placeholder="Vui lòng nhập mật khẩu"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={clsx(style.text)}>
                                    <div className={clsx(style.checkboxContainer)}>
                                        <input type="checkbox" className={clsx(style.checkbox)} required />
                                        <label>
                                            Đồng ý với <a href="#">Điều khoản & Dịch vụ</a>
                                        </label>
                                    </div>
                                </div>
                                <div className={clsx(style.text)}>
                                    <button type="submit" className={clsx(style.buttonSubmit)}>
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
                            {message && (
                                <div className={clsx(style.text)}>
                                    <p>{message}</p>
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

export default Register
