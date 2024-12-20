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
import axios from "axios";
import Swal from "sweetalert2";


export const EditMotelOwner = () => {
  const { id } = useParams();


  const navigate = useNavigate();

  const [originalServices, setOriginalServices] = useState<
    GetMotelEditDTO_Service[]
  >([]);
  const [services, setServices] = useState<GetMotelEditDTO_Service[]>([]);
  const [idServicesDelete, setIdServicesDelete] = useState<number[]>([]);

  //phần địa chỉ
  type LocationOption = {
    name: string;
    code: number | null;
  };
  const [disabledServiceIds, setDisabledServiceIds] = useState<number[]>([]);
  const [provinces, setProvinces] = useState<LocationOption[]>([]);
  const [districts, setDistricts] = useState<LocationOption[]>([]);
  const [wards, setWards] = useState<LocationOption[]>([]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<LocationOption>({
    name: "",
    code: null,
  });
  const [selectedDistrict, setSelectedDistrict] = useState<LocationOption>({
    name: "",
    code: null,
  });
  const [selectedWard, setSelectedWard] = useState<string>("");
  useEffect(() => {
    // Lấy danh sách tỉnh
    axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((response) => setProvinces(response.data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);
  useEffect(() => {
    if (selectedProvince.code) {
      axios
        .get(
          `https://provinces.open-api.vn/api/p/${selectedProvince.code}/?depth=2`
        )
        .then((response) => setDistricts(response.data.districts))
        .catch((error) => console.error("Lỗi khi lấy Huyện:", error));

      // Đặt lại selectedDistrict và wards nếu tỉnh mới khác tỉnh hiện tại
      if (selectedProvince.name !== selectedDistrict.name) {
        setSelectedDistrict({ name: "", code: null });
        setWards([]);
        setSelectedWard("");
      }
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict.code) {
      axios
        .get(
          `https://provinces.open-api.vn/api/d/${selectedDistrict.code}/?depth=2`
        )
        .then((response) => {
          setWards(response.data.wards);
          // Đặt giá trị mặc định cho selectedWard nếu cần
          if (
            selectedWard === "" ||
            !response.data.wards.some((w: any) => w.name === selectedWard)
          ) {
            setSelectedWard("");
          }
        })
        .catch((error) => console.error("Lỗi khi lấy xã:", error));
    }
  }, [selectedDistrict]);
  //tách hàm địa chỉ ra
  const splitAddress = (address: string) => {
    const regex =
      /^(.*?),\s*(Phường|Xã)\s*(.*?),\s*(Quận|Huyện)\s*(.*?),\s*(Thành phố|Tỉnh)\s*(.*?)$/i;

    // Trường hợp không khớp đầy đủ
    if (!regex.test(address)) {
      const parts = address.split(",").map((part) => part.trim());
      return {
        detailAddress: parts.slice(0, parts.length - 3).join(", "),
        ward: parts[parts.length - 3] || "",
        district: parts[parts.length - 2] || "",
        province: parts[parts.length - 1] || "",
      };
    }

    const match = address.match(regex);
    return match
      ? {
        detailAddress: match[1].trim(),
        ward: match[3].trim(),
        district: match[5].trim(),
        province: match[7].trim(),
      }
      : {
        detailAddress: "",
        ward: "",
        district: "",
        province: "",
      };
  };

  useEffect(() => {
    console.log(
      "Giá trị bộ lọc hiện tại: ",
      selectedProvince.name,
      selectedDistrict.name,
      selectedWard
    );
  }, [selectedProvince, selectedDistrict, selectedWard]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const section = document.querySelector(
        ".section-search-add-motel-address"
      );
      const input = document.querySelector(".input-add-motel-address-1");

      if (
        section &&
        !section.contains(target) &&
        input &&
        !input.contains(target)
      ) {
        setIsSectionVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //Hết phần địa chỉ
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
      const services = response.data.services || [];
      const disabledIds = services
        .filter(
          (service: GetMotelEditDTO_Service) =>
            service.name === "Điện" || service.name === "Nước"
        )
        .map((service: GetMotelEditDTO_Service) => service.id);

      setDisabledServiceIds(disabledIds);
      const addressParts = splitAddress(response.data.address || "");
      setValues({ ...response.data, address: addressParts.detailAddress });
      setSelectedProvince({ name: addressParts.province, code: null });
      setSelectedDistrict({ name: addressParts.district, code: null });
      setSelectedWard(addressParts.ward || ""); // Đảm bảo selectedWard có giá trị mặc định
    };
    LoadData();
  }, []);

  // Thêm hàm validate
  const validateField = (name: string, value: string) => {
    if (name === "province") {
      console.log("Province: ", selectedProvince);
      console.log("District: ", selectedDistrict);
      console.log("Ward: ", selectedWard);
      if (!selectedProvince.name) {
        setErrors((prev) => ({
          ...prev,
          province: "Vui lòng chọn Tỉnh/Thành phố, Quận/ Huyện và Phường/ Xã",
        }));
        return false;
      } else if (!selectedDistrict.name) {
        setErrors((prev) => ({
          ...prev,
          province: "Vui lòng chọn Quận/ Huyện và Phường/ Xã",
        }));
        return false;
      } else if (!selectedWard) {
        setErrors((prev) => ({
          ...prev,
          province: "Vui lòng chọn Phường/ Xã",
        }));
        return false;
      }
    }

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
      const addressall: string = `${values.address}, ${selectedWard}, ${selectedDistrict.name}, ${selectedProvince.name}`;

      const fieldsToValidate = {
        name: values.name,
        address: values.address,
        province: selectedProvince.name,
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
        const duplicateIndex = services.findIndex(
          (s, i) =>
            i !== index &&
            s.name.trim().toLowerCase() === service.name.trim().toLowerCase()
        );
        if (duplicateIndex !== -1) {
          setErrors((prev) => ({
            ...prev,
            [`service_name_${index}`]: "Tên dịch vụ đã tồn tại",
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
      if (!hasError) {
        values.address = addressall;
      }
      const response = await EditMotel(values);
      if (response.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Thành công",
          text: "Sửa dãy trọ thành công",
        }).then(() => {
          // Lưu trạng thái thông báo vào localStorage
          navigate(-1);
          localStorage.setItem("showNotification", "true");
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Thất bại!",
        text: "Sửa dãy trọ thất bại",
      });
      console.log("lỗi r" + error.message);
    }
  };

  console.log(values);
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 form-group mt-3 px-2 position-relative">
                  <label htmlFor="title" className="label-motel-info">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info input-add-motel-address-1"
                    placeholder="Tỉnh/ Thành phố, Quận/ Huyện, Phường/ Xã"
                    value={
                      selectedProvince?.name
                        ? selectedDistrict?.name
                          ? selectedWard
                            ? `${selectedProvince.name}, ${selectedDistrict.name}, ${selectedWard}`
                            : `${selectedProvince.name}, ${selectedDistrict.name}`
                          : selectedProvince.name
                        : ""
                    }
                    onFocus={() => setIsSectionVisible(true)}
                    readOnly
                  />
                  {errors.province && (
                    <div className="err-text">{errors.province}</div>
                  )}
                  {isSectionVisible && (
                    <section className="section-search-add-motel-address">
                      <div className=" d-flex align-items-center col-12 col-sm-12 col-md-12 flex-wrap">
                        <div className="dropdown ">
                          <button
                            className="btn-search-add-motel-address  px-3 py-2  dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Tỉnh/Thành phố
                          </button>
                          <ul
                            className={`dropdown-menu ${selectedProvince.code == null ? "show" : ""
                              }`}
                            aria-labelledby="dropdownMenuButton1"
                          >
                            {provinces.map((province) => (
                              <li key={province.code}>
                                <a
                                  className="dropdown-item"
                                  onClick={() => {
                                    setSelectedProvince({
                                      name: province.name,
                                      code: province.code,
                                    });
                                    setSelectedDistrict({
                                      name: "",
                                      code: null,
                                    });
                                  }}
                                >
                                  {province.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="dropdown ">
                          <button
                            className="btn-search-add-motel-address  px-3 py-2 dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={!selectedProvince.code}
                          >
                            Quận/ Huyện
                          </button>
                          <ul
                            className={`dropdown-menu ${selectedDistrict.code == null &&
                                selectedProvince.code != null
                                ? "show"
                                : ""
                              }`}
                            aria-labelledby="dropdownMenuButton2"
                          >
                            {districts.map((district) => (
                              <li key={district.code}>
                                <a
                                  className="dropdown-item"
                                  onClick={() => {
                                    setSelectedDistrict({
                                      name: district.name,
                                      code: district.code,
                                    });
                                  }}
                                >
                                  {district.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="dropdown ">
                          <button
                            className="btn-search-add-motel-address  px-3 py-2 dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={!selectedDistrict.code}
                          >
                            Phường/ Xã
                          </button>
                          <ul
                            className={`dropdown-menu ${selectedDistrict.code != null &&
                                selectedProvince.code != null &&
                                selectedWard == ""
                                ? "show"
                                : ""
                              }`}
                            aria-labelledby="dropdownMenuButton3"
                          >
                            {wards.map((ward) => (
                              <li key={ward.code}>
                                <a
                                  className="dropdown-item"
                                  onClick={() => {
                                    setSelectedWard(ward.name);
                                    setIsSectionVisible(false);
                                  }}
                                >
                                  {ward.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
                <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Địa chỉ cụ thể
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Địa chỉ cụ thể"
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
                          disabled={disabledServiceIds.includes(service.id)}
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
                          className={`btn btn-transform-y2 btn-xoa-add-motel mt-3 ${disabledServiceIds.includes(service.id) ? "d-none" : ""
                            }`} onClick={() => removeService(service.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* <button
                    className="btn btn-transform-y2 btn-luu-all mt-3"
                    onClick={addService}
                    type="button"
                  >
                    Thêm dịch vụ
                  </button> */}
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
