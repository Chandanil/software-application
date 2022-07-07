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
                      <input type="text" placeholder="Bank Ac No." className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <input type="text" placeholder="Account Holder's Name"className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <select className='form-control'>
                        <option>Account Type</option>
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
                      <input type="text" placeholder="Branch" className="form-control" />
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Right Claim</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Relation</option>
                          <option>Son</option>
                          <option>Daughter</option>
                          <option>Son</option>
                          <option>Daughter</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text" placeholder="Age" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <select className='form-control'>
                          <option>ID Type</option>
                          <option>Citizenship</option>
                          <option>License</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text" placeholder="ID Number" className='form-control' />
                      </div>
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Permanent Address</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>State</option>
                          <option>Bagmate</option>
                          <option>Karnali</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>District</option>
                          <option>Kavre</option>
                          <option>Sindhuli</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                        <option>Municipality/Rural Development</option>
                          <option>Panchkhal</option>
                          <option>Kamala Mai</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2 col-lg-1">
                      <div className="form-group">
                        <select className="form-control">
                        <option>Ward</option>
                          <option>5</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                      <div className="form-group">
                        <input type="text"placeholder="Tol"  className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="address row">
                    <h6 className="sub-title">Contact Details</h6>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text" placeholder="Phone No" className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text" placeholder="Mobile No." className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text"placeholder="Email ID"  className='form-control'/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <input type="text" placeholder="Pan No." className='form-control'/>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </form>
        </div>
  );
};
