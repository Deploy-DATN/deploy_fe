import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Inputs } from '../..'

import InputField from "@/components/form_controls/input_field"
import React from 'react'

interface Props {
    onSubmit: ((data: Inputs) => void)
}

const ProfileForm: React.FC<Props> = ({ onSubmit }) => {
    const schema = yup
        .object({
            name: yup
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
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            phone: '',
            name: '',
            email: ''
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
                    name="name"
                    type="text"
                    errors={errors}
                    classname={`form-control ${errors['name']?.message ? "is-invalid" : ""}`}
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