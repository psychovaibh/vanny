import React, { useRef} from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminAddMainCategory(props) {
    let name = useRef("")

    function getInputData(e){
        name.current = e.target.value
    }
    function postData(e){
        e.preventDefault();
        alert(name.current)
    }

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
            </h5>
          </div>
        </div>
        <form onSubmit={postData}>
            <div className="mb-3 mt-4">
                <input onChange={getInputData} type="text" name="name" placeholder="Enter MainCategory Name" className="form-control" />
            </div>
            <div className="mb-3">
                <button type="reset" className="btn btn-dark w-50">Reset</button>
                <button type="submit" className="btn btn-info w-50">Submit</button>
            </div>
        </form>
      </div>
    </>
  );
}

export default AdminAddMainCategory;
