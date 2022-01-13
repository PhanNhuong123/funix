import React from "react";
import { Link, useParams } from "react-router-dom";
import { STAFFS } from "../staffs";
import dateFormat from "dateformat";

function StaffInfo({ staff }) {
  return (
    <React.Fragment>
      <div className="wrapper__path">
        <Link to="/">Nhân viên</Link>
        <p> / {staff.name}</p>
      </div>
      <div className="wrapper__staff">
        <div className="wrapper__staff-img col-3 md-col-4 sm-col-12">
          <img src={staff.image} />
        </div>
        <div className="wrapper__staff-info col-9 md-col-8 sm-col-12">
          <h4>Họ và tên: {staff.name}</h4>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

function HandleClickStaff() {
  let { id } = useParams();
  let staff = STAFFS[id];
  return (
    <div className="wrapper row">
      <StaffInfo staff={staff} />
    </div>
  );
}
export default HandleClickStaff;
