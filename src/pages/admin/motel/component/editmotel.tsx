import "../styles/stylemotel.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddService,
  DeleteService,
  EditMotel,
  EditService,
  GetMotelByEditApi,
} from "@/services/api/MotelApi";
import {
  AddServiceDTO,
  EditServiceDTO,
  GetMotelEditDTO,
  GetMotelEditDTO_Service,
} from "@/services/Dto/MotelDto";
import { toast } from "react-toastify";

export const EditMotelOwner = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [originalServices, setOriginalServices] = useState<
    GetMotelEditDTO_Service[]
  >([]);
  const [services, setServices] = useState<GetMotelEditDTO_Service[]>([]);
  const [idServicesDelete, setIdServicesDelete] = useState<number[]>([]);

  const addService = () => {
    const newService = {
      id: Date.now(), // Sử dụng timestamp làm id tạm thời
      name: "",
      price: 1000,
      description: "",
      isNew: true, // Đánh dấu service mới
    };
    setServices((prev) => [...prev, newService]);
  };

  // Thêm state errors ở đầu component
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [values, setValues] = useState<GetMotelEditDTO>({
    id: 0,
    name: "",
    address: "",
    services: [],
  });

  useEffect(() => {
    const LoadData = async () => {
      var response = await GetMotelByEditApi(id);
      setValues(response.data);
      setServices(response.data.services || []);
      setOriginalServices(response.data.services || []); // Lưu trữ danh sách services ban đầu
    };
    LoadData();
  }, []);

  // Thêm hàm validate
  const validateField = (name: string, value: string) => {
    if (!value || (value.trim() === "" && name !== "description")) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Trường này không được để trống",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
    return true;
  };

  // Cập nhật onChange handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const value = e.target.value;
    setValues({ ...values, [field]: value });
    validateField(field, value);
  };

  const removeService = (id: number) => {
    const serviceToRemove = services.find((s) => s.id === id);

    // Nếu không phải service mới (không có isNew), thêm vào danh sách cần xóa
    if (serviceToRemove && !("isNew" in serviceToRemove)) {
      setIdServicesDelete((prev) => [...prev, id]);
    }

    console.log(idServicesDelete);

    // Xóa khỏi danh sách services hiện tại
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handleSubmit = async () => {
    try {
      setErrors({});
      let hasError = false;

      // Kiểm tra các trường cơ bản
      const fieldsToValidate = {
        name: values.name,
        address: values.address,
      };

      // Kiểm tra từng trường
      Object.entries(fieldsToValidate).forEach(([key, value]) => {
        if (!validateField(key, String(value || ""))) {
          hasError = true;
        }
      });

      // Kiểm tra dịch vụ
      services.forEach((service, index) => {
        if (!service.name.trim()) {
          setErrors((prev) => ({
            ...prev,
            [`service_name_${index}`]: "Tên dịch vụ không được để trống",
          }));
          hasError = true;
        }
        if (!service.price.toString().trim()) {
          setErrors((prev) => ({
            ...prev,
            [`service_price_${index}`]: "Giá dịch vụ không được để trống",
          }));
          hasError = true;
        }
        if (isNaN(service.price) || service.price <= 0) {
          setErrors((prev) => ({
            ...prev,
            [`service_price_${index}`]: "Giá dịch vụ phải là số dương",
          }));
          hasError = true;
        }
      });

      if (hasError) {
        return;
      }

      if (idServicesDelete.length > 0) {
        const response = await DeleteService(idServicesDelete);
        if (response.code === 200) {
          console.log("Xóa dịch vụ thành công");
        }
      }

      // Tách services thành 2 mảng: cần thêm mới và cần cập nhật
      const servicesToAdd = services.filter((service) => "isNew" in service);
      const servicesToUpdate = services.filter(
        (service) => !("isNew" in service)
      );

      // Thêm services mới
      if (servicesToAdd.length > 0) {
        const dataServices: AddServiceDTO[] = servicesToAdd.map((service) => ({
          name: service.name,
          price: service.price,
          description: service.description,
          motelId: id || "",
        }));

        const addResponse = await AddService(dataServices);
        if (addResponse.code === 200) {
          console.log("Thêm dịch vụ thành công");
        }
      }

      // Lọc ra những service đã thay đổi so với ban đầu
      const changedServices = servicesToUpdate.filter((service) => {
        const originalService = originalServices.find(
          (s) => s.id === service.id
        );
        return (
          originalService &&
          (service.name !== originalService.name ||
            service.price !== originalService.price ||
            service.description !== originalService.description)
        );
      });

      if (changedServices.length > 0) {
        const dataServices: EditServiceDTO[] = changedServices.map(
          (service) => ({
            id: service.id,
            name: service.name,
            price: service.price,
            description: service.description,
          })
        );

        const editResponse = await EditService(dataServices);
        if (editResponse.code === 200) {
          console.log("Cập nhật dịch vụ thành công");
        }
      }

      const response = await EditMotel(values);
      if (response.code === 200) {
        toast.success("Sửa dãy trọ thành công");
        navigate(-1);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Sửa dãy trọ thất bại");
      console.log("lỗi r");
    }
  };

  return (
    <div className="container-fluid-add-motel">
      <div className="row align-items-stretch px-0">
        <div className="w-100 text-center bg-color-theme-thostay">
          <h2 className="">Sửa dãy trọ</h2>
        </div>
        <div className="card w-100">
          <div className="card-body p-4 info-motel">
            <form className="form-motel-info">
              <div className="mt-2">
                <h4 className="h4-add-motel">Dãy trọ</h4>
              </div>
              <div className="row flex-wrap">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Tên dãy trọ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Tên dãy trọ"
                    value={values?.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  {errors.name && <div className="err-text">{errors.name}</div>}
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Địa chỉ"
                    value={values?.address}
                    onChange={(e) => handleChange(e, "address")}
                  />
                  {errors.address && (
                    <div className="err-text">{errors.address}</div>
                  )}
                </div>
                <div className="mt-3">
                  <h4 className="h4-add-motel">Dịch vụ dãy trọ</h4>
                </div>
                <div className="d-flex flex-wrap">
                  {services?.map((service, index) => (
                    <div
                      key={service.id}
                      className="row flex-wrap col-12 mt-2 px-2"
                    >
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2">
                        <label className="label-motel-info">Tên dịch vụ</label>
                        <input
                          type="text"
                          className="form-control mt-2 input-motel-info"
                          placeholder="Tên dịch vụ"
                          value={service.name}
                          onChange={(e) =>
                            setServices((prev) =>
                              prev.map((s) =>
                                s.id === service.id
                                  ? { ...s, name: e.target.value }
                                  : s
                              )
                            )
                          }
                        />
                        {errors[`service_name_${index}`] && (
                          <div className="err-text">
                            {errors[`service_name_${index}`]}
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2">
                        <label className="label-motel-info">Giá dịch vụ</label>
                        <input
                          type="text"
                          className="form-control mt-2 input-motel-info"
                          placeholder="Giá dịch vụ"
                          value={service.price}
                          onChange={(e) =>
                            setServices((prev) =>
                              prev.map((s) =>
                                s.id === service.id
                                  ? { ...s, price: Number(e.target.value) }
                                  : s
                              )
                            )
                          }
                        />
                        {errors[`service_price_${index}`] && (
                          <div className="err-text">
                            {errors[`service_price_${index}`]}
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-2">
                        <label className="label-motel-info">
                          Mô tả dịch vụ
                        </label>
                        <input
                          type="text"
                          className="form-control mt-2 input-motel-info"
                          placeholder="Mô tả dịch vụ"
                          value={service.description}
                          onChange={(e) =>
                            setServices((prev) =>
                              prev.map((s) =>
                                s.id === service.id
                                  ? { ...s, description: e.target.value }
                                  : s
                              )
                            )
                          }
                        />
                      </div>
                      {errors[`service_description_${index}`] && (
                        <div className="err-text">
                          {errors[`service_description_${index}`]}
                        </div>
                      )}
                      <div className="col-12 col-sm-12 col-lg-2 d-flex justify-content-lg-around align-items-lg-end">
                        <button
                          type="button"
                          className="btn btn-transform-y2 btn-xoa-add-motel mt-3"
                          onClick={() => removeService(service.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    className="btn btn-transform-y2 btn-luu-all mt-3"
                    onClick={addService}
                    type="button"
                  >
                    Thêm dịch vụ
                  </button>
                </div>
                {/* <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Mô tả
                  </label>
                  <textarea
                    className="form-control mt-2 input-motel-info"
                    placeholder="Mô tả dãy trọ"
                  />
                  <div className="err-text">errer</div>
                </div> */}
                <div className="mx-auto col-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 mt-4">
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn-style btn-trove-all btn-transform-y2"
                      onClick={() => navigate(-1)}
                    >
                      Trở về
                    </button>
                    <button
                      type="button"
                      className="btn-style btn-luu-all btn-transform-y2"
                      onClick={handleSubmit}
                    >
                      Sửa
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMotelOwner;
