import React, { useState } from "react";

const FilterSearch = () => {
    interface Filters {
        area: string;
        price: string;
        surrounding: string[];
      }
      
      const [filters, setFilters] = useState<Filters>({
        area: "",
        price: "",
        surrounding: [],
      });

  const resetFilters = () => {
    setFilters({
      area: "",
      price: "",
      surrounding: [],
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const surrounding = checked
        ? [...prev.surrounding, value]
        : prev.surrounding.filter((item) => item !== value);
      return { ...prev, surrounding };
    });
  };

  const handleRadioChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  //tìm kiếm ở đây
  const handleSearch = () => {
    console.log("Giá trị bộ lọc hiện tại: ", filters);
    
  };

  return (
    <div className="filter-motel-search">
      <div className="filter-motel-header">
        <h2 className="h2-filter-motel">
          <i className="fa-solid fa-filter fa-lg"></i> Lọc kết quả
        </h2>
      </div>
      <div className="filter-motel-body">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Diện tích
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {["1", "2", "3", "4"].map((value, idx) => (
                  <label key={idx} className="radio" htmlFor={`area_${value}`}>
                    <input
                      type="radio"
                      id={`area_${value}`}
                      name="area"
                      value={value}
                      checked={filters.area === value}
                      onChange={handleRadioChange}
                    />
                    <span></span>
                    <p>
                      {value === "1" && "Dưới 15 m²"}
                      {value === "2" && "Dưới 20 m²"}
                      {value === "3" && "Dưới 25 m²"}
                      {value === "4" && "Trên 30 m²"}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Giá
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {["1", "2", "3", "4"].map((value, idx) => (
                  <label key={idx} className="radio" htmlFor={`price_${value}`}>
                    <input
                      type="radio"
                      id={`price_${value}`}
                      name="price"
                      value={value}
                      checked={filters.price === value}
                      onChange={handleRadioChange}
                    />
                    <span></span>
                    <p>
                      {value === "1" && "Dưới 1 triệu/tháng"}
                      {value === "2" && "Dưới 2 triệu/tháng"}
                      {value === "3" && "Dưới 3 triệu/tháng"}
                      {value === "4" && "Trên 4 triệu/tháng"}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Môi trường xung quanh
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {["market", "supermarket", "school", "Hospital", "park"].map(
                  (value, idx) => (
                    <label key={idx} className="checkbox" htmlFor={value}>
                      <input
                        type="checkbox"
                        id={value}
                        value={value}
                        checked={filters.surrounding.includes(value)}
                        onChange={handleCheckboxChange}
                      />
                      <span />
                      <p className="mb-0">
                        {value === "market" && "Chợ"}
                        {value === "supermarket" && "Siêu thị"}
                        {value === "school" && "Trường học"}
                        {value === "Hospital" && "Bệnh viện"}
                        {value === "park" && "Công viên"}
                      </p>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-motel-footer">
        <button className="btn-transform-y2" onClick={handleSearch}>
          Tìm kiếm
        </button>
        <button className="btn-transform-y2" onClick={resetFilters}>
          Xóa bộ lọc
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
