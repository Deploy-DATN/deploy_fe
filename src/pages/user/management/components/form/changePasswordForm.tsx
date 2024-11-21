import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import InputField from "@/components/form_controls/input_field"
import React from 'react'
import { PasswordUser } from '@/services/api/HomeApi'

interface Props {
    onSubmit: ((data: PasswordUser) => void)
}

const ChangePasswordForm: React.FC<Props> = ({ onSubmit }) => {
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
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group" style={{ minHeight: '80px' }}>
                <InputField
                    control={control}
                    label="Mật khẩu cũ"
                    name="currentPassword"
                    type="password"
                    errors={errors}
                    classname={`form-control ${errors['currentPassword']?.message ? "is-invalid" : ""}`}
                />
            </div>
            <div className="form-group" style={{ minHeight: '80px' }}>
                <InputField
                    control={control}
                    label="Mật khẩu mới"
                    name="newPassword"
                    type="password"
                    errors={errors}
                    classname={`form-control ${errors['newPassword']?.message ? "is-invalid" : ""}`}
                />
            </div>
            <div className="form-group" style={{ minHeight: '80px' }}>
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
    )
}

export default ChangePasswordForm