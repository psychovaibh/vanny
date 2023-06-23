import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <>
      <button
        className="btn btn-dark w-100"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Admin Options
      </button>

      <div
        className="offcanvas offcanvas-start bg-secondary"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header bg-secondary">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="off-canvas p-5 bg-secondary text-justify-center">
          <div className="off-canvas-body pb-2 fs-3 fw-bolder ">
            <Link to="/adminhome" className="text-decoration-underline text-secondary-emphasis"> Home</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> Users</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="/adminmaincategory" className="text-decoration-none text-secondary-emphasis"> MainCategory</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> SubCategory</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> Brand</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> Product</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> Newslatter</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="#" className="text-decoration-none text-secondary-emphasis"> Checkout</Link>
          </div>
          <div className="off-canvas-body pb-2 fs-3  fw-medium">
            <Link to="/contact" className="text-decoration-none text-secondary-emphasis"> Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
