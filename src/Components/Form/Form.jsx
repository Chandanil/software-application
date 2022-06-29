import "./Form.scss";

export const Form = () => {
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
                        Personal Details
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
