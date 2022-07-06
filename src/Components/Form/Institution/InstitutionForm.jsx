export const InstitutionForm = () => {
    return (
        <>
        <div className="institution-form">
            <form>
              <div className="step-item">
                <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                      <label>Member ID</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Devnagarik Name</label>
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
                      <label>Establish Date</label>
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Owner Name 1</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Owner Name 2</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Owner Name 3</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Owner Name 4</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="address  row">
                    <h6 className="sub-title">Office Address</h6>
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
        </>
    );
};