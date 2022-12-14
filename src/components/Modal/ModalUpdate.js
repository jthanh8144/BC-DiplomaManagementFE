import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import images from '~/assets/images';
import { DataContext } from '~/contexts/DataContext';
import { diplomaApi } from '~/api/diplomaApi';

const cx = classNames.bind(styles);

export function ModalUpdate() {
  const { diploma, setLoading } = useContext(DataContext);

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [code, setCode] = useState('');
  const [certificate, setCertificate] = useState('');
  const [status, setStatus] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [modeOfStudy, setModeOfStudy] = useState('');
  const [school, setSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [rank, setRank] = useState('');
  const [regNo, setRegNo] = useState('');
  const [preview, setPreview] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    setLoading(true);
    setFullName(diploma?.fullName);
    setDateOfBirth(diploma?.dateOfBirth);
    setGender(diploma?.gender);
    setCode(diploma?.code);
    setCertificate(diploma?.certificate);
    setStatus(diploma?.status);
    setSpeciality(diploma?.speciality);
    setModeOfStudy(diploma?.modeOfStudy);
    setSchool(diploma?.school);
    setGraduationYear(diploma?.graduationYear);
    setRank(diploma?.rank);
    setRegNo(diploma?.regNo);
    setPreview(diploma?.urlImage);
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diploma]);

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
      certificate &&
      speciality &&
      graduationYear &&
      school &&
      rank &&
      modeOfStudy &&
      regNo &&
      preview
    ) {
      (async () => {
        setLoading(true);
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
          setLoading(false);
          alert('Ch???nh s???a v??n b???ng th??nh c??ng!');
          window.location.reload(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
          if (error.response.status === 413) {
            alert('???nh t???i l??n v?????t qu?? 5MB');
          } else {
            alert('C?? l???i x???y ra, vui l??ng th??? l???i sau!');
          }
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
            <h5 className="modal-title">Ch???nh s???a v??n b???ng</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Th??ng tin c?? nh??n</p>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="full-name-1" className="col-form-label">
                    H??? v?? t??n
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
                    Ng??y sinh
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
                    Gi???i t??nh
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
                      value="N???"
                      checked={gender === 'N???'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      N???
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <form className={cx('modal-section__form')}>
              <p className={cx('modal-section__title')}>Th??ng tin v??n b???ng</p>
              <div className="row g-3 align-items-center">
                <div className="col-4">
                  <label htmlFor="code-1" className="col-form-label">
                    S??? hi???u b???ng
                  </label>
                  <input
                    type="text"
                    id="code-1"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    readOnly={true}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="certificate-1" className="col-form-label">
                    Lo???i b???ng
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
                    Tr???ng th??i
                  </label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="false">Ch??a x??c nh???n</option>
                    <option value="true">???? x??c nh???n</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-6">
                  <label htmlFor="speciality-1" className="col-form-label">
                    Chuy??n ng??nh
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
                    Lo???i h??nh ????o t???o
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
                    Tr?????ng
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
                    N??m t???t nghi???p
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
                    X???p lo???i
                  </label>
                  <select
                    className="form-select"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                  >
                    <option value="Xu???t s???c">Xu???t s???c</option>
                    <option value="Gi???i">Gi???i</option>
                    <option value="Kh??">Kh??</option>
                    <option value="Trung b??nh">Trung b??nh</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="regNo-1" className="col-form-label">
                    S??? v??o s???
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
                        ???nh v??n b???ng
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
              Ho??n th??nh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
