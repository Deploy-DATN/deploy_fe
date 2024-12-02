import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import InputField from "@/components/form_controls/input_field";
import { Motel, Result } from "./registerOwner";

interface Props {
  onNext: (data: Result) => void;
}

const RegisterOwner_1 = ({ onNext }: Props) => {
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên dãy trọ"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    description: yup.string().required("Vui lòng nhập mô tả"),
    services: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Vui lòng nhập tên dịch vụ"),
        price: yup
          .number()
          .required("Vui lòng nhập giá")
          .typeError("Giá phải là một số hợp lệ")
          .positive("Giá phải là số dương"),
        description: yup.string().required("Vui lòng nhập mô tả dịch vụ"),
      })
    ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Motel>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
      services: [
        { name: "Điện", price: 0, description: "Dịch vụ cung cấp điện" },
        { name: "Nước", price: 0, description: "Dịch vụ cung cấp nước" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const onSubmit = (data: Motel) => {
    const result: Result = {
      name: data.name,
      address: data.address,
      description: data.description,
      services: data.services,
    };
    onNext(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <h5>Dãy trọ</h5>
        <div className="mb-3 row">
          <div className="col-6">
            <InputField
              control={control}
              label="Tên nhà trọ:"
              name="name"
              type="text"
              errors={errors}
              classname={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
          </div>
          <div className="col-6">
            <InputField
              control={control}
              label="Địa chỉ:"
              name="address"
              type="text"
              errors={errors}
              classname={`form-control ${errors.address ? "is-invalid" : ""}`}
            />
          </div>
        </div>
        <div className="mb-3">
          <InputField
            control={control}
            label="Giới thiệu trọ:"
            name="description"
            type="textarea"
            errors={errors}
            rows={4}
            classname={`form-control ${errors.description ? "is-invalid" : ""}`}
          />
        </div>
      </div>
      <div className="container">
        <h5>Dịch vụ</h5>
        {fields.map((field, index) => (
          <div key={field.id} className="mb-3 row">
            <div className="col-3">
              <InputField
                control={control}
                label={`Tên dịch vụ ${index + 1}:`}
                name={`services.${index}.name`}
                type="text"
                errors={errors}
                classname={`form-control ${
                  errors.services?.[index]?.name ? "is-invalid" : ""
                }`}
              />
            </div>
            <div className="col-3">
              <InputField
                control={control}
                label="Giá:"
                name={`services.${index}.price`}
                type="text"
                errors={errors}
                classname={`form-control ${
                  errors.services?.[index]?.price ? "is-invalid" : ""
                }`}
              />
            </div>
            <div className="col-5">
              <InputField
                control={control}
                label="Mô tả:"
                name={`services.${index}.description`}
                type="text"
                errors={errors}
                classname={`form-control ${
                  errors.services?.[index]?.description ? "is-invalid" : ""
                }`}
              />
            </div>
            <div
              className={`col-1 d-flex  ${
                errors.services?.[index]
                  ? "align-items-center"
                  : "align-items-end"
              }`}
            >
              <button
                type="button"
                className="border border-danger py-2 w-100 rounded-2 bg-danger"
                onClick={() => remove(index)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => append({ name: "", price: 0, description: "" })}
        >
          Thêm dịch vụ
        </button>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" type="submit">
          Tiếp tục
        </button>
      </div>
    </form>
  );
};

export default RegisterOwner_1;
