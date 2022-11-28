import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import images from '~/assets/images';
import { diplomaApi } from '~/api/diplomaApi';

const cx = classNames.bind(styles);

export function ModalCreate() {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [gender, setGender] = useState('Nam');
  const [code, setCode] = useState('');
  const [certificate, setCertificate] = useState('');
  const [status, setStatus] = useState(false);
  const [speciality, setSpeciality] = useState('');
  const [modeOfStudy, setModeOfStudy] = useState('');
  const [school, setSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [rank, setRank] = useState('Giỏi');
  const [regNo, setRegNo] = useState('');
  const [preview, setPreview] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }
    const url = URL.createObjectURL(image);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
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
      image &&
      status
    ) {
      (async () => {
        try {
          const formData = new FormData();
          formData.append('image', image);
          const res = await diplomaApi.uploadImage(formData);
          await diplomaApi.create({
            code,
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
            urlImage: res.url,
            status,
          });
        } catch (error) {
          alert('Có lỗi xảy ra, vui lòng thử lại sau!');
          console.log(error);
        }
      })();
    }
  };

  return (
    <div
      className="modal fade"
      id="modal-form"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thêm văn bằng</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className={cx('modal-section__form')} onSubmit={() => {}}>
              <p className={cx('modal-section__title')}>Thông tin cá nhân</p>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="full-name" className="col-form-label">
                    Họ và tên
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="full-name"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="date-of-birth" className="col-form-label">
                    Ngày sinh
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="date"
                    id="date-of-birth"
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
                      name="gender"
                      id="inlineRadio1"
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
                      name="gender"
                      id="inlineRadio2"
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
            <form className={cx('modal-section__form')} onSubmit={() => {}}>
              <p className={cx('modal-section__title')}>Thông tin văn bằng</p>
              <div className="row g-3 align-items-center">
                <div className="col-4">
                  <label htmlFor="code" className="col-form-label">
                    Số hiệu bằng
                  </label>
                  <input
                    type="text"
                    id="code"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="certificate" className="col-form-label">
                    Loại bằng
                  </label>
                  <input
                    type="text"
                    id="certificate"
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
                  <label htmlFor="speciality" className="col-form-label">
                    Chuyên ngành
                  </label>
                  <input
                    type="text"
                    id="speciality"
                    className="form-control"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="modeOfStudy" className="col-form-label">
                    Loại hình đào tạo
                  </label>
                  <input
                    type="text"
                    id="modeOfStudy"
                    className="form-control"
                    value={modeOfStudy}
                    onChange={(e) => setModeOfStudy(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="school" className="col-form-label">
                    Trường
                  </label>
                  <input
                    type="text"
                    id="school"
                    className="form-control"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="graduationYear" className="col-form-label">
                    Năm tốt nghiệp
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
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
                  <label htmlFor="regNo" className="col-form-label">
                    Số vào sổ
                  </label>
                  <input
                    type="text"
                    id="regNo"
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
                      <label htmlFor="image-diploma" className="col-form-label">
                        Ảnh văn bằng
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image-diploma"
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
