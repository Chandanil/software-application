import React from 'react';
import { useState } from 'react';
import "./Form.scss";

export const AcDetailForm = ()=> {
  const  [fullName, setFullName] = useState();
  return (
    <div className="personal-form">
            <form>
              <div className="step-item">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Account Number</label>
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
                </div>
              </div>
            </form>
        </div>
  );
};
