import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
import clsx from 'clsx'

import InputField from '@/components/form_controls/input_field'
import { Account } from '@/services/api/loginApi'

import style from '../styles/Login.module.scss'

interface loginProps {
    onSubmit: ((data: Account) => void)
}

const LoginForm: React.FC<loginProps> = ({ onSubmit }) => {

    // const schema = yup
    //     .object({
    //         phone: yup
    //             .string()
    //             .required('Số điện thoại không để trống')
    //             .test(
    //                 'Incorrect-phone-number-format',
    //                 'Số điện thoại không đúng định dạng',
    //                 value => /^0\d{9}$/.test(value || '')
    //             ),
    //         password: yup
    //             .string()
    //             .required('Mật khẩu không để trống'),
    //     })
    //     .required();

    const { control, handleSubmit, formState: { errors } } = useForm<Account>({
        defaultValues: {
            phone: '',
            password: ''
        },
        // resolver: yupResolver(schema),
        // mode: 'onBlur'
    });
    return (
        <form className='frm-login col-11 col-sm-8 col-md-8 col-lg-9 col-xxl-7 mx-auto mb-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3 d-flex flex-column justify-content-center align-items-center'>
                <p className='title'>Đăng nhập</p>
                <p className='text'>Chào mừng đến với ứng dụng quản lý phòng trọ</p>
            </div>
            <div className="mb-3">
                <InputField
                    control={control}
                    label="Số điện thoại"
                    name="phone"
                    type="text"
                    errors={errors}
                    classname={`input form-control rounded-pill ${errors['phone']?.message ? "is-invalid" : ""}`}
                    placeholder='Vui lòng nhập số điện thoại'
                />
            </div>
            <div className="mb-3">
                <InputField
                    control={control}
                    label="Mật khẩu"
                    name="password"
                    type="password"
                    errors={errors}
                    classname={`input form-control rounded-pill ${errors['password']?.message ? "is-invalid" : ""}`}
                    placeholder='Vui lòng nhập mật khẩu'
                />
            </div>
            <div className='mb-3 d-flex justify-content-between'>
                <div className="form-check">
                    <input type="checkbox" className="check form-check-input" />
                    <label className="form-check-label">Duy trì đăng nhập</label>
                </div>
                <a href='#' className='link text-decoration-none'>Quên mật khẩu</a>
            </div>
            <button type="submit" className="btn btn-submit form-control rounded-pill">Đăng nhập</button>
        </form>
    )
}

export default LoginForm