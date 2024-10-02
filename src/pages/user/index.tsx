import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from 'clsx';

import style from '../styles/register.module.scss';

interface Inputs {
  userName: string;
  email: string;
  password: string;
  checkbox?: boolean;
}

const User: React.FC = () => {

  const schema = yup.object({
    userName: yup
      .string()
      .required("Họ và tên không được để trống")
      .matches(/^[a-zA-Z\s]*$/, "Họ và tên không chứa số hoặc ký tự đặc biệt"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Mật khẩu không được để trống"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Bạn phải đồng ý với Điều khoản & Dịch vụ")
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
        password: '',
        userName: '',
        email: '',
        checkbox: false
    },
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Họ và Tên</label>
        <input type="text" {...register("userName")} className={clsx("form-control", { "is-invalid": errors.userName })} />
        {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} className={clsx("form-control", { "is-invalid": errors.email })} />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div>
        <label>Mật khẩu</label>
        <input type="password" {...register("password")} className={clsx("form-control", { "is-invalid": errors.password })} />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      <div>
        <input type="checkbox" {...register("checkbox")} />
        <label>Đồng ý với Điều khoản & Dịch vụ</label>
        {errors.checkbox && <div className="invalid-feedback">{errors.checkbox.message}</div>}
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default User;
