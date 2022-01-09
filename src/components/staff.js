import { Link } from "react-router-dom";
import StaffInfo from "./HandleClickStaff.js";

const Staff = ({ staff }) => (
  <Link
    to="/staffinfo"
    className="staff col-2"
    onClick={() => {console.log(staff)
      StaffInfo(staff)
    }}
  >
    <div className="staff__content">
      <img src={staff.image} alt={staff.name} />
      <p className="staff__content__staff-name">
        <b>{staff.name}</b>
      </p>
    </div>
  </Link>
);

export default Staff;
