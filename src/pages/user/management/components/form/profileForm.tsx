import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputField from "@/components/form_controls/input_field"
import React from 'react'
import { UserDetail } from '@/services/api/HomeApi';
import { useLocation } from 'react-router-dom';

interface Props {
    onSubmit: ((data: UserDetail) => void)
}

const ProfileForm: React.FC<Props> = ({ onSubmit }) => {
    const location = useLocation();
    const { state } = location as { state: UserDetail | undefined };
    const schema = yup
        .object({
            fullName: yup
                .string()
                .required("Họ và tên không được để trống")
                .matches(/^\D*$/, "Họ và tên không chứa số")
                .matches(/^[\p{L}\d\s]*$/u, "Họ và tên không chứa ký tự đặc biệt"),
            email: yup
                .string()
                .email("Email không hợp lệ")
                .required("Email không được để trống"),
            phone: yup
                .string()
                .matches(/^0\d{9}$/, "Số điện thoại không đúng định dạng")
                .required("Số điện thoại không được để trống"),
        })
        .required();
    const { control, handleSubmit, formState: { errors } } = useForm<UserDetail>({
        defaultValues: {
            phone: state?.phone || '',
            fullName: state?.fullName || '',
            email: state?.email || ''
        },
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });



    return (
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group" style={{ minHeight: '80px' }}>
                <InputField
                    control={control}
                    label="Họ và tên"
                    name="fullName"
                    type="text"
                    errors={errors}
                    classname={`form-control ${errors['fullName']?.message ? "is-invalid" : ""}`}
                />
            </div>
            <div className="form-group" style={{ minHeight: '80px' }}>
                <InputField
                    control={control}
                    label="Số điện thoại"
                    name="phone"
                    type="text"
                    errors={errors}
                    classname={`form-control ${errors['phone']?.message ? "is-invalid" : ""}`}
                />
            </div>
            <div className="form-group" style={{ minHeight: '80px' }}>
                <InputField
                    control={control}
                    label="Email"
                    name="email"
                    type="text"
                    errors={errors}
                    classname={`form-control ${errors['email']?.message ? "is-invalid" : ""}`}
                />
            </div>
            <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
    )
}

export default ProfileForm