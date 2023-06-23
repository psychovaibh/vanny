import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Admin(props) {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h5 className="bg-dark text-light text-center rounded rounded fs-4 p-1">
            Admin Home
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-16">
          <img src="/img/banner/banner-2.jpg" alt="" />
        </div>
        <div className="col-md-7 mt-5 text-center">
          <table className="table table-striped table-secondary border-primary ">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>Vaibhav</td>
              </tr>

              <tr>
                <th>User:</th>
                <td>Admin</td>
              </tr>

              <tr>
                <th>Email:</th>
                <td>Vibuvaibhav1@gmail.com</td>
              </tr>

              <tr>
                <th>Phone:</th>
                <td>999999999</td>
              </tr>
              <tr>
                <th colSpan={2}>
                <Link to="/update-profile"><button className="w-100 bg-dark text-light rounded">update</button></Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
