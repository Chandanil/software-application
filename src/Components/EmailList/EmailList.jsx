import "./EmailList.scss";
export const EmailList = () => {
  return (
    <>
      <div className="emaillist">
        <div className="cl-header">
          <h5 className="title">@ Email</h5>
        </div>
        <div className="email-body">
          <div className="select-all">
            <input type="checkbox" />
            <label>Select All</label>
          </div>
          <ul>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
