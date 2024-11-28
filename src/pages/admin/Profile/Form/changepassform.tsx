import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
import InputField from "@/components/form_controls/input_field"
import React from 'react'
import { PasswordUser } from '@/services/api/HomeApi'

interface Props {
    onSubmit: ((data: PasswordUser) => void)
}

const Changepassform: React.FC<Props> = ({ onSubmit }) => {
    const schema = yup
        .object({
            currentPassword: yup
                .string()
                .required("Mật khẩu cũ không được để trống"),
            newPassword: yup
                .string()
                .required("Mật khẩu mới không được để trống"),
            confirmNewPassword: yup
                .string()
                .oneOf([yup.ref("newPassword")], "Xác nhận mật khẩu không khớp với mật khẩu mới")
                .required("Xác nhận mật khẩu không được để trống")
        })
        .required();
    const { control, handleSubmit, formState: { errors } } = useForm<PasswordUser>({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    return (
        <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Form */}
            <div className="form-container col-4" style={{ width: '50%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3" style={{ width: '80%' }}>
                        <InputField
                            control={control}
                            label="Mật khẩu cũ"
                            name="currentPassword"
                            type="password"
                            errors={errors}
                            classname={`form-control ${errors['currentPassword']?.message ? "is-invalid" : ""}`}
                        />
                    </div>
                    <div className="form-group mb-3" style={{ width: '80%' }}>
                        <InputField
                            control={control}
                            label="Mật khẩu mới"
                            name="newPassword"
                            type="password"
                            errors={errors}
                            classname={`form-control ${errors['newPassword']?.message ? "is-invalid" : ""}`}
                        />
                    </div>
                    <div className="form-group mb-4" style={{ width: '80%' }}>
                        <InputField
                            control={control}
                            label="Xác nhận mật khẩu"
                            name="confirmNewPassword"
                            type="password"
                            errors={errors}
                            classname={`form-control ${errors['confirmNewPassword']?.message ? "is-invalid" : ""}`}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
                </form>
            </div>

            {/* Hình ảnh */}
            <div className="background-img col-8">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2F2cee2cc5-d019-46b1-be0b-e0fb6cccff43.png?alt=media"
                            alt="Slide 1"
                            style={{ width: '75%', borderRadius: '10px' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2F34763c93-fd68-4b2f-a6f8-b1397026030b.png?alt=media"
                            alt="Slide 2"
                            style={{ width: '75%', borderRadius: '10px' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2F6ec19993-d0c1-4b90-b686-45a9fa281973.png?alt=media"
                            alt="Slide 3"
                            style={{ width: '75%', borderRadius: '10px' }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default Changepassform