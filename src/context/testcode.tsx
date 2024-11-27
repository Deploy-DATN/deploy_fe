import axios from "axios";
import React, { useEffect, useState } from "react";

const Testcode = () => {
  type LocationOption = {
    name: string;
    code: number | null;
  };
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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
      // Lấy danh sách quận/huyện khi tỉnh được chọn
      axios
        .get(
          `https://provinces.open-api.vn/api/p/${selectedProvince.code}/?depth=2`
        )
        .then((response) => setDistricts(response.data.districts))
        .catch((error) => console.error("Error fetching districts:", error));
    }
    setSelectedDistrict({ name: "", code: null });
    setWards([]);
    setSelectedWard("");
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict.code) {
      // Lấy danh sách phường/xã khi quận/huyện được chọn
      axios
        .get(
          `https://provinces.open-api.vn/api/d/${selectedDistrict.code}/?depth=2`
        )
        .then((response) => setWards(response.data.wards))
        .catch((error) => console.error("Error fetching wards:", error));
    }
    setSelectedWard("");
  }, [selectedDistrict]);

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
      const section = document.querySelector("section");
      const input = document.querySelector("#title");

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

  return (
    <>
      <div>
        <div className="container-fluid-add-motel">
          <div className="row align-items-stretch mt-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 form-group mt-3 px-2 position-relative">
              <label htmlFor="title" className="label-motel-info">
                Địa chỉ
              </label>
              <input
                type="text"
                id="title"
                className="form-control mt-2 input-motel-info"
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
              {errors.address && (
                <div className="err-text">{errors.address}</div>
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
                        className={`dropdown-menu ${
                          selectedProvince.code == null ? "show" : ""
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
                        className={`dropdown-menu ${
                          selectedDistrict.code == null &&
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
                        className={`dropdown-menu ${
                          selectedDistrict.code != null &&
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testcode;
