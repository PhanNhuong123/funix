import React from "react";
import { STAFFS } from "../../staffs.jsx";
import Staff from "../staff";


function StaffsPage() {
  return (
    <div className="wrapper row">
      <div className="wrapper__staffs">
        {STAFFS.map((staff) => (
          <Staff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default StaffsPage;