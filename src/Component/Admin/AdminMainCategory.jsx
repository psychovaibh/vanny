import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


function AdminMainCategory(props) {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <h5 className="bg-dark text-light text-center rounded rounded fs-4 p-1">
              Main Category
              <Link to="/admin-add-maincategory" className="fa fa-plus text-light text-decoration-none float-right me-2"></Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMainCategory;
