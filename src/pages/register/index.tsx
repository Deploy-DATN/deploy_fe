import { useState } from "react"
import {
    MDBBtn
} from 'mdb-react-ui-kit'
import clsx from "clsx"

import Poster from '@/assets/images/poster_1.png'
import Logo from '@/assets/images/logo.png'
import style from './styles/register.module.scss'

interface User {
    name: string,
    phoneNumber: string
}

const Register = () => {
    const [account, setAccount] = useState<User>({
        phoneNumber: '',
        name: ''
    });

    const [errs, setErrs] = useState<User>({
        phoneNumber: '',
        name: ''
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

    const isValidVietnameseName = (name: string): boolean => {
        const vietnameseNameRegex = /^[\p{L}\s]+$/u;
        return vietnameseNameRegex.test(name);
    };

    const handleCheck = (e: any) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber') {
            const PHONENUMBER_REGEX = /^0\d{9}$/;
            if (value === '') {
                spErr(name, `Số điện thoại không được để trống`);
            } else if (!PHONENUMBER_REGEX.test(value)) {
                spErr(name, `Số điện thoại không đúng định dạng`);
            }
            else {
                spErr(name, '');
            }
        } else if (name === 'name') {
            if (value === '') {
                spErr(name, `Họ tên không được để trống`);
            } else if (value.length > 50) {
                spErr(name, `Họ tên không quá 50 ký tự`);
            } else if (!isValidVietnameseName(value)) {
                spErr(name, `Họ tên không chứa kí tự số và kí tự đặc biệt`);
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
                            <div className='logo mb-3'>
                                <img src={Logo} className='img-fluid' alt='logo' />
                            </div>
                            <div className="right-content d-flex flex-column justify-content-center">
                                <div className='title title-color mb-4'>
                                    <h3 className='m-0'>Đăng ký</h3>
                                </div>
                                <form className={clsx('mb-4', style.frmRegister)}>
                                    <div className={style.mbCInput}>
                                        <label className="form-label">Họ và tên</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className={`form-control ${errs && errs.name !== '' ? 'is-invalid' : ''}`}
                                            value={account.name}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleCheck(e)}
                                        />
                                        {errs && errs.name !== '' &&
                                            <div className={clsx('invalid-feedback', style.err)}>{errs.name}</div>
                                        }
                                    </div>
                                    <div className={style.mbCInput}>
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className={`form-control ${errs && errs.phoneNumber !== '' ? 'is-invalid' : ''}`}
                                            value={account.phoneNumber}
                                            onChange={(e) => handleChange(e)}
                                            onBlur={(e) => handleCheck(e)}
                                        />
                                        {errs && errs.phoneNumber !== '' &&
                                            <div className={clsx('invalid-feedback', style.err)}>{errs.phoneNumber}</div>
                                        }
                                    </div>
                                    <MDBBtn type='submit' className="mt-2" block>
                                        Gửi OTP về số điện thoại
                                    </MDBBtn>
                                </form>
                                <div id="recaptcha-container"></div>
                                <div className='forgot-pass text-center'>
                                    <span>Bạn đã có tài khoản? <a href='#'>Đăng nhập</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register