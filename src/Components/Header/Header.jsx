import "./Header.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="container-fluid">
          <div className="top-header">
            <div className="left-content">
              <div className="main-logo">
                <Link to="/">
                  <h1>
                    Mega<span>Byte</span>
                  </h1>
                </Link>
              </div>
              <div className="cl-search">
                <form>
                  <div className="form-group">
                    <i className="fa fa-search icon"></i>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Search.."
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="right-content">
              <ul className="content-list">
                <li className="content-item">
                  <div className="secondary-logo">
                    <span className="site-title">
                      Dhanodaye Multi Purpose Co-operative Ltd
                    </span>
                    <img src="Images/logo.jpg" />
                  </div>
                </li>
                <li className="content-item">
                  <div className="menu-link">
                    <i className="fa fa-gear icon"></i>
                  </div>
                </li>
                <li className="content-item">
                  <div className="menu-link">
                    <i className="fa fa-arrows-alt icon"></i>
                  </div>
                </li>
                <li className="content-item">
                  <Dropdown className="menu-link cl-dropdown">
                    <Dropdown.Toggle className="dropdown-btn">
                      <i className="fa fa-list icon"></i>
                      <span class="count">0</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu cl-dropdown-menu noti-list">
                      <div className="cl-header">
                        <h6 className="title">Notification</h6>
                        <badge className="cl-badge ">6 New</badge>
                      </div>
                      <div className="notification-list">
                        <ul>
                          <li>
                            <div className="avatar">
                              <img src="Images/team.jpg" />
                            </div>
                            <div className="list-content">
                              <strong>
                                Congratulation chandani ! <span>Winner</span>
                              </strong>
                              <small>Won the monthly best seller badge</small>
                            </div>
                          </li>
                          <li>
                            <div className="avatar">
                              <img src="Images/team.jpg" />
                            </div>
                            <div className="list-content">
                              <strong>
                                New Message <span>recieved</span>
                              </strong>
                              <small>you have 10 unread message</small>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="content-item">
                  <Dropdown className="menu-link cl-dropdown">
                    <Dropdown.Toggle className="dropdown-btn">
                      <i className="fa fa-bell-o icon"></i>
                      <span class="count">0</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu cl-dropdown-menu noti-list">
                      <div className="cl-header">
                        <h6 className="title">Notification</h6>
                        <badge className="cl-badge ">6 New</badge>
                      </div>
                      <div className="notification-list">
                        <ul>
                          <li>
                            <div className="avatar">
                              <img src="Images/team.jpg" />
                            </div>
                            <div className="list-content">
                              <strong>
                                Congratulation chandani ! <span>Winner</span>
                              </strong>
                              <small>Won the monthly best seller badge</small>
                            </div>
                          </li>
                          <li>
                            <div className="avatar">
                              <img src="Images/team.jpg" />
                            </div>
                            <div className="list-content">
                              <strong>
                                New Message <span>recieved</span>
                              </strong>
                              <small>you have 10 unread message</small>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="content-item">
                  <Dropdown className="menu-link  cl-dropdown">
                    <Dropdown.Toggle className="dropdown-btn">
                      <div className="cl-user">
                        <img src="Images/team.jpg" alt="team" />
                        <div className="user-name">
                          <p className="title">
                            Chandani Lama
                            <small>Admin</small>
                          </p>
                        </div>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-auto dropdown-menu cl-dropdown-menu user-dropdown-menu ">
                      <ul>
                        <li className="item">
                          <Link to="/profile">
                            <i className="fa fa-user"></i>
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li className="item">
                          <Link to="inbox">
                            <i className="fa fa-envelope"></i>
                            <span>Inbox</span>
                          </Link>
                        </li>
                        <li className="item">
                          <Link to="task">
                            <i className="fa fa-check-square-o"></i>
                            <span>Task</span>
                          </Link>
                        </li>
                        <li className="item">
                          <Link to="/chat">
                            <i className="fa fa-commenting"></i>
                            <span>Chat</span>
                          </Link>
                        </li>
                        <li className="item">
                          <Link to="/logout">
                            <i className="fa fa-sign-out"></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
