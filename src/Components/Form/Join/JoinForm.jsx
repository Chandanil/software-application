import React, { useState } from "react";

export const JoinForm = () => {
    const [fullName, setFullName] = useState("");
    const [nepaliName, setNepaliName] = useState("");
    const [date, setDate] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");

    return (
        <>
        <div className="company-form">
        <form>
              <div className="step-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Member ID</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Purpose</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Devnagarik Name</label>
                      <input type="text" className="form-control" onChange={(e) => {
                        setNepaliName(e.target.value);
                      }} />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Date</label>
                      <input type="text" className="form-control" onChange={(e) => {setDate(e.target.value)}}/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Owner Name 1</label>
                      <input type="text" className="form-control" 
                      onChange={(e) =>{ setFatherName(e.target.value)}} />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Owner Name 2</label>
                      
                      <input type="text" className="form-control" onChange={(e) => { setMotherName(e.target.value)}}/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Owner  Name 3</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label>Owner  Name 4</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Office Address</h6>
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
                        <label>Phone No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Mobile No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Email ID </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Pan No. </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
        </>
    );
};