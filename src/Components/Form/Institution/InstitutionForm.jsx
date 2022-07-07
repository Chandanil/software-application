import React, { useState } from "react";
import { StepperHead } from "../../StepperHead/StepperHead";

export const InstitutionForm = () => {
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
                  <input type="text"placeholder="01" className="form-control"disabled />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Devnagarik Name"
                    className="form-control"
                    onChange={(e) => {
                      setNepaliName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input 
                    type="date"
                    placeholder="Date"
                    className="form-control  w-50"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                  <span className="nepali-date">2050/ 10 / 10</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Owner Name 1"
                    className="form-control"
                    onChange={(e) => {
                      setFatherName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Owner Name 2"
                    className="form-control"
                    onChange={(e) => {
                      setMotherName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input type="text"
                  placeholder="Owner Name 3"
                   className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input type="text" 
                  placeholder="Owner Name 4"
                  className="form-control" />
                </div>
              </div>
              <div className="address  row">
                <h6 className="sub-title">Office Address</h6>
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
                      <option>Municipality/Rural Development </option>
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
                    <input type="text" placeholder="Tol" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="address row">
                <h6 className="sub-title">Contact Details</h6>
                <div className="col-sm-6 col-lg-3">
                  <div className="form-group">
                    <input type="text"placeholder="Phone No." className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="form-group">
                    <input type="text" placeholder="Mobile No."className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="form-group">
                    <input type="text" placeholder="Email ID " className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="form-group">
                    <input type="text" placeholder="Pan No." className="form-control" />
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
