import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/stylemotel.scss";
import {
  faCamera,
  faFile,
  faFileAlt,
  faFileExcel,
  faFilePdf,
  faFileWord,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const EditMotelOwner = () => {
  //rút gọn giao diện
  const [isMotelInfoVisible, setIsMotelInfoVisible] = useState(true);

  const showMotelInfo = () => setIsMotelInfoVisible(true);
  const showPriceInfo = () => setIsMotelInfoVisible(false);
  //trở lại trang trước đó
  const navigate = useNavigate();

  const [images, setImages] = useState<string[]>([]);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const [files, setFiles] = useState<
    { name: string; url: string; type: string }[]
  >([]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setFiles((prevFiles) => [
        ...prevFiles,
        { name: file.name, url: fileUrl, type: file.type },
      ]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
              <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="cangiua color-tab-addmotel">
                <a className="p-3" onClick={showMotelInfo}>
                  Dãy trọ
                </a>
                <a className="p-3" onClick={showPriceInfo}>
                  Nâng cao
                </a>
              </div>
              {isMotelInfoVisible ? (
                <div className="d-flex flex-wrap">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Tên dãy trọ
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Tên dãy trọ"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Số phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Số phòng"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá dịch vụ khác
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá dịch vụ khác"
                    />
                  </div>

                </div>
              ) : (
                <div className="d-flex flex-wrap">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Diện tích
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Diện tích"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá phòng"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá điện
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá điện"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá nước
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá nước"
                    />
                  </div>
                </div>
              )}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="col-12 form-group mt-3 px-2">
                <label htmlFor="title" className="label-motel-info">
                  Hình ảnh
                </label>
                <div className="row flex-wrap">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3 position-relative"
                    >
                      <img
                        src={image}
                        className="rounded-img-info-model img-fluid"
                        alt="Không có ảnh"
                      />
                      <button
                        type="button"
                        className="btn-close-img-add-motel position-absolute text-end"
                        onClick={() => removeImage(index)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                  ))}
                  <div className="file-input-wrapper col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <label
                      htmlFor="file-upload"
                      className="file-upload-label w-100"
                    >
                      <FontAwesomeIcon
                        icon={faCamera}
                        className="camera-icon"
                      />
                      <input
                        type="file"
                        id="file-upload"
                        className="file-upload-input"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 form-group mt-3 px-2">
                <label htmlFor="title" className="label-motel-info">
                  Giấy tờ liên quan
                </label>
                <div className="row flex-wrap">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3 position-relative"
                    >
                      {/* Hiển thị icon hoặc tên file */}
                      {file.type.includes("image") ? (
                        <img
                          src={file.url}
                          className="rounded-img-info-model img-fluid"
                          alt="Không có ảnh"
                        />
                      ) : (
                        <div className="file-display position-absolute h-100 w-100">
                          {/* Hiển thị icon tương ứng với từng loại file */}
                          {file.type.includes("pdf") && (
                            <FontAwesomeIcon
                              icon={faFilePdf}
                              className="file-icon"
                              size="2x"
                            />
                          )}
                          {file.type.includes("word") && (
                            <FontAwesomeIcon
                              icon={faFileWord}
                              className="file-icon"
                              size="2x"
                            />
                          )}
                          {file.type.includes("excel") && (
                            <FontAwesomeIcon
                              icon={faFileExcel}
                              className="file-icon"
                              size="2x"
                            />
                          )}
                          {!file.type.includes("pdf") &&
                            !file.type.includes("word") &&
                            !file.type.includes("excel") && (
                              <FontAwesomeIcon
                                icon={faFileAlt}
                                className="file-icon"
                                size="2x"
                              />
                            )}
                          {/* Tên file */}
                          <p className="file-name mb-0">{file.name}</p>
                        </div>
                      )}
                      <button
                        type="button"
                        className="btn-close-img-add-motel position-absolute text-end"
                        onClick={() => removeFile(index)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                  ))}
                  <div className="file-input-wrapper col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <label
                      htmlFor="file-upload"
                      className="file-upload-label w-100"
                    >
                      <FontAwesomeIcon icon={faFile} className="camera-icon" />
                      <input
                        type="file"
                        id="file-upload"
                        className="file-upload-input"
                        onChange={handleFileUpload}
                        accept=".doc,.docx,.xls,.xlsx,.pdf,.jpg,.png,.jpeg" // Chỉ định loại file được phép
                      />
                    </label>
                  </div>
                </div>
              </div>
              </div>

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
                  >
                    Thêm
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
