import React, { useState } from "react";
import "./Form.scss";

export const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitle = ["Personal Details", "Account Detail", "Document"];
  const [fullName, setFullName] = useState("");

  return (
    <>
      <div className="body-section step-form">
        <div className="container-fluid">
          <div className="cl-form">
            <form>
              <h5 className="title">Customer Creation Form</h5>
              <div className="input-group">
                <div className="group-item">
                  <input type="radio" />
                  <label>Institution</label>
                </div>
                <div className="group-item">
                  <input type="radio" checked />
                  <label>Personal</label>
                </div>
                <div className="group-item">
                  <input type="radio" />
                  <label>Join</label>
                </div>
              </div>
              <div className="step-item">
                <ul>
                  <li className="active">
                    <i className="fa fa-user-circle icon"></i>
                    {FormTitle[page]}
                  </li>
                  <li>
                    <i className="fa fa-file-o icon"></i>
                    Account Detail
                  </li>
                  <li>
                    <i className="fa fa-file-o icon"></i>
                    Document
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Member ID</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Devnagarik Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Date</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Father Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Mother Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Grand Father Name </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Gender</label>
                      <div className="input-group">
                        <div className="group-item">
                          <input type="radio" checked />
                          <label>Male</label>
                        </div>
                        <div className="group-item">
                          <input type="radio" />
                          <label>Female</label>
                        </div>
                        <div className="group-item">
                          <input type="radio" />
                          <label>Others</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Permanent Address</h6>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>State </label>
                        <select className="form-control">
                          <option>Bagmate</option>
                          <option>Karnali</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>District </label>
                        <select className="form-control">
                          <option>Kavre</option>
                          <option>Sindhuli</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Municipality/Rural Development </label>
                        <select className="form-control">
                          <option>Panchkhal</option>
                          <option>Kamala Mai</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <div className="form-group">
                        <label>Ward </label>
                        <select className="form-control">
                          <option>5</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Tol </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="address row">
                    <h6 className="sub-title">Temporary Address</h6>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>State </label>
                        <select className="form-control">
                          <option>Bagmate</option>
                          <option>Karnali</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>District </label>
                        <select className="form-control">
                          <option>Kavre</option>
                          <option>Sindhuli</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Municipality/Rural Development </label>
                        <select className="form-control">
                          <option>Panchkhal</option>
                          <option>Kamala Mai</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <div className="form-group">
                        <label>Ward </label>
                        <select className="form-control">
                          <option>5</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Tol </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="address row">
                    <h6 className="sub-title">Contact Details</h6>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Phone No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Mobile No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Email ID </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Pan No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="cl-btn save-btn"
                  disabled={page == FormTitle.length - 1}
                  onClick={() => {
                    setPage((currentPage) => currentPage + 1);
                  }}
                >
                  Save and Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
