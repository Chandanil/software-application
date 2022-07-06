import React from 'react';
import { useState } from 'react';
import "../Form.scss";

export const AcDetailForm = ()=> {
  const  [fullName, setFullName] = useState();
  return (
    <div className="personal-form">
            <form>
              <div className="step-item">
                <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Bank AC No.</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Account Holder's Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Account Type</label>
                      <select className='form-control'>
                        <option>Saving Account</option>
                        <option>Saving Account</option>
                        <option>Saving Account</option>
                        <option>Saving Account</option>
                        <option>Saving Account</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Baranch</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Right Claim</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Relation </label>
                        <select className="form-control">
                          <option>Son</option>
                          <option>Daughter</option>
                          <option>Son</option>
                          <option>Daughter</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Age </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>ID Type </label>
                        <input type="text" className='form-control' />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>ID Number </label>
                        <input type="text" className='form-control' />
                      </div>
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Permanent Address</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>State </label>
                        <select className="form-control">
                          <option>Bagmate</option>
                          <option>Karnali</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>District </label>
                        <select className="form-control">
                          <option>Kavre</option>
                          <option>Sindhuli</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Municipality/Rural Development </label>
                        <select className="form-control">
                          <option>Panchkhal</option>
                          <option>Kamala Mai</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2 col-lg-1">
                      <div className="form-group">
                        <label>Ward </label>
                        <select className="form-control">
                          <option>5</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                      <div className="form-group">
                        <label>Tol </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="address row">
                    <h6 className="sub-title">Contact Details</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Phone No </label>
                        <input type="text" className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Mobile No </label>
                        <input type="text" className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Email Id </label>
                        <input type="text" className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Pan No.</label>
                        <input type="text" className='form-control'/>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </form>
        </div>
  );
};
