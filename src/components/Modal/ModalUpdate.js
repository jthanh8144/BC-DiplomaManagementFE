import { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import images from '~/assets/images';
import { DataContext } from '~/contexts/DataContext';
import { diplomaApi } from '~/api/diplomaApi';

const cx = classNames.bind(styles);

export function ModalUpdate() {
  const { diploma } = useContext(DataContext);

  const [fullName, setFullName] = useState(diploma.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(diploma.dateOfBirth);
  const [gender, setGender] = useState(diploma.gender);
  const [code, setCode] = useState(diploma.code);
  const [certificate, setCertificate] = useState(diploma.certificate);
  const [status, setStatus] = useState(diploma.status);
  const [speciality, setSpeciality] = useState(diploma.speciality);
  const [modeOfStudy, setModeOfStudy] = useState('');
  const [school, setSchool] = useState(diploma.school);
  const [graduationYear, setGraduationYear] = useState(diploma.graduationYear);
  const [rank, setRank] = useState(diploma.rank);
  const [regNo, setRegNo] = useState(diploma.regNo);
  const [preview, setPreview] = useState(diploma.urlImage);
  const [image, setImage] = useState();

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  };

  const handleSubmit = () => {
    if (
      code &&
      fullName &&
      dateOfBirth &&
      gender &&
      certificate &&
      speciality &&
      graduationYear &&
      school &&
      rank &&
      modeOfStudy &&
      regNo &&
      preview &&
      status
    ) {
      (async () => {
        try {
          let url = diploma.urlImage;
          if (preview !== url) {
            const formData = new FormData();
            formData.append('image', image);
            const res = await diplomaApi.uploadImage(formData);
            url = res.url;
          }
          await diplomaApi.update(code, {
            fullName,
            dateOfBirth,
            gender,
            certificate,
            speciality,
            graduationYear,
            school,
            rank,
            modeOfStudy,
            regNo,
            urlImage: url,
            status,
          });
        } catch (error) {
          console.log(error);
          alert('Có lỗi xảy ra, vui lòng thử lại sau!');
        }
      })();
    }
  };

  return (
    <div
      className="modal fade"
      id="modal-update"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chỉnh sửa văn bằng</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Thông tin cá nhân</p>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="full-name-1" className="col-form-label">
                    Họ và tên
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="full-name-1"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="date-of-birth-1" className="col-form-label">
                    Ngày sinh
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="date"
                    id="date-of-birth-1"
                    className="form-control"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="" className="col-form-label">
                    Giới tính
                  </label>
                </div>
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1-1"
                      value="Nam"
                      checked={gender === 'Nam'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Nam
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2-1"
                      value="Nữ"
                      checked={gender === 'Nữ'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Thông tin văn bằng</p>
              <div className="row g-3 align-items-center">
                <div className="col-4">
                  <label htmlFor="code-1" className="col-form-label">
                    Số hiệu bằng
                  </label>
                  <input
                    type="text"
                    id="code-1"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="certificate-1" className="col-form-label">
                    Loại bằng
                  </label>
                  <input
                    type="text"
                    id="certificate-1"
                    className="form-control"
                    value={certificate}
                    onChange={(e) => setCertificate(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="status" className="col-form-label">
                    Trạng thái
                  </label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="false">Chưa xác nhận</option>
                    <option value="true">Đã xác nhận</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="speciality-1" className="col-form-label">
                    Chuyên ngành
                  </label>
                  <input
                    type="text"
                    id="speciality-1"
                    className="form-control"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="modeOfStudy-1" className="col-form-label">
                    Loại hình đào tạo
                  </label>
                  <input
                    type="text"
                    id="modeOfStudy-1"
                    className="form-control"
                    value={modeOfStudy}
                    onChange={(e) => setModeOfStudy(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="school-1" className="col-form-label">
                    Trường
                  </label>
                  <input
                    type="text"
                    id="school-1"
                    className="form-control"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="graduationYear-1" className="col-form-label">
                    Năm tốt nghiệp
                  </label>
                  <input
                    type="text"
                    id="graduationYear-1"
                    className="form-control"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="" className="col-form-label">
                    Xếp loại
                  </label>
                  <select
                    className="form-select"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                  >
                    <option value="Xuất sắc">Xuất sắc</option>
                    <option value="Giỏi">Giỏi</option>
                    <option value="Khá">Khá</option>
                    <option value="Trung bình">Trung bình</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="regNo-1" className="col-form-label">
                    Số vào sổ
                  </label>
                  <input
                    type="text"
                    id="regNo-1"
                    className="form-control"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center mt-2">
                <div className="col-12">
                  <div className="row mb-2">
                    <div className="col-2">
                      <label htmlFor="diploma-image" className="col-form-label">
                        Ảnh văn bằng
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="diploma-image"
                        className="form-control"
                        onChange={onSelectImage}
                      />
                    </div>
                  </div>
                  <div className={cx('modal-section__form-preview')}>
                    <img
                      src={preview || images.imagePlaceholder}
                      alt="preview"
                      className={cx('modal-section__form-img')}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSubmit}
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
