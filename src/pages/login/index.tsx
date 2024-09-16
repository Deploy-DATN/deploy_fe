import { useState } from "react"
import {
    MDBBtn
} from 'mdb-react-ui-kit'
import clsx from "clsx"

import Poster from '@/assets/images/poster_1.png'
import Logo from '@/assets/images/logo.png'
import style from './styles/Login.module.scss'

interface Account {
    phone: string,
    password: string
}

const Login = () => {
    const [account, setAccount] = useState<Account>({
        phone: '',
        password: ''
    });

    const [errs, setErrs] = useState<Account>({
        phone: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setAccount((pre) => ({
            ...pre,
            [name]: value
        }));
    }

    const spErr = (name: string, mess: string) => {
        setErrs((pre) => ({
            ...pre,
            [name]: mess
        }));
    }

    const handleCheck = (e: any) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const PHONENUMBER_REGEX = /^0\d{9}$/;
            if (value === '') {
                spErr(name, `Số điện thoại không được để trống`);
            } else if (!PHONENUMBER_REGEX.test(value)) {
                spErr(name, `Số điện thoại không đúng định dạng`);
            }
            else {
                spErr(name, '');
            }
        } else if (name === 'password') {
            if (value === '') {
                spErr(name, `Mật khẩu không được để trống`);
            } else {
                spErr(name, '');
            }
        }
    }

    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center login-register'>
                <div className='row body-login-register shadow-3'>
                    <div className='col-md-6 left-block d-none d-md-block p-0'>
                        <img src={Poster} className='img-fluid poster' alt='poster' />
                    </div>
                    <div className='col-md-6 right-block d-flex justify-content-center'>
                        <div className='right-main d-flex flex-column my-4'>
                            <div className='logo mb-4'>
                                <img src={Logo} className='img-fluid' alt='logo' />
                            </div>
                            <div className="right-content d-flex flex-column justify-content-center">
                                <div className='title text-center mb-5'>
                                    <h4 className='m-0'>Chào mừng trở lại</h4>
                                </div>
                                <form className={clsx('mb-4', style.frmLogin)}>
                                    <div className={style.mbCInput}>
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className={`form-control ${errs && errs.phone !== '' ? 'is-invalid' : ''}`}
                                            value={account.phone}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleCheck(e)}
                                        />
                                        {errs && errs.phone !== '' &&
                                            <div className={clsx('invalid-feedback', style.err)}>{errs.phone}</div>
                                        }
                                    </div>
                                    <div className={style.mbCInput}>
                                        <label className="form-label">Mật khẩu</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className={`form-control ${errs && errs.password !== '' ? 'is-invalid' : ''}`}
                                            value={account.password}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleCheck(e)}
                                        />
                                        {errs && errs.password !== '' &&
                                            <div className={clsx('invalid-feedback', style.err)}>{errs.password}</div>
                                        }
                                    </div>
                                    <div className={clsx(style.mbCInput, 'mb-c-input d-flex flex-row-reverse')}>
                                        <span>Bạn không có tài khoản? <a href='#'>Đăng ký</a></span>
                                    </div>
                                    <MDBBtn block>
                                        Đăng nhập
                                    </MDBBtn>
                                </form>
                                <div className='forgot-pass text-center'>
                                    <a href='#'>Quên mật khẩu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login