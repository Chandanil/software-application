  import "./Navbar.scss";
  import React  from "react";
  import Dropdown from "react-bootstrap/Dropdown";
  import Container from "react-bootstrap/Container";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import {Link, useNavigate } from "react-router-dom";
  export const MainNavbar = () =>{ 
  return (
    <>
  <nav id="site-navigation " className="navbar navbar-expand-lg  cl-navigation">
    <div className="container-fluid">
      <div className="navbar-collapse custom-collapsed" id="navbarCollapse">
        <ul className="navbar-nav cl-navbar">
          <li className="nav-item dropdown cl-dropdown ">
            <span className="nav-link dropdown-toggle" 
            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-bolt icon"></i> Voucher</span>
            <i className="fa fa-angle-down down-icon" />
            <ul className="dropdown-menu cl-dropdown-menu">
              <li className="dropdown-item">
                <Link to="/lg" className="dropdown-link">Ledger Voucher</Link>
              </li>
              <li className="dropdown dropdown-item">
              <Link to="/lg" className="dropdown-link">Ledger Voucher 1</Link>
                <i className="fa fa-angle-right down-icon" />
                <ul className="dropdown-menu cl-dropdown-menu dropdown-submenu">
                  <li className="dropdown-item"> 
                  <Link to="/lg" className="dropdown-link">Ledger Voucher 1.1</Link>
                  </li>
                  <li className="dropdown-item">
                  <Link to="/lg" className="dropdown-link">Ledger Voucher 1.2</Link>
                     </li>
                  <li className="dropdown-item dropdown"> 
                  <Link to="/lg" className="dropdown-link">Ledger Voucher 1.3</Link>
                  <i className="fa fa-angle-right down-icon" />
                    <ul className="dropdown-menu dropdown-submenu-left">
                      <li className="dropdown-item">
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 1.3.1</Link>
                         </li>
                      <li className="dropdown-item"> 
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 1.3.2</Link>
                      </li>
                      <li className="dropdown-item"> 
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 1.3.3</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
              <Link to="/lg" className="dropdown-link">Ledger Voucher 2</Link>
              </li>
              <li className="dropdown-item">
              <Link to="/lg" className="dropdown-link">Ledger Voucher 3</Link>
              </li>
              <li className="dropdown-item">
              <Link to="/lg" className="dropdown-link">Ledger Voucher 4</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
          <Link to="/form" className="dropdown-link"><i className="fa fa-file-text-o icon"></i>Customers</Link>
          </li>
          <li className="nav-item ">
          <Link to="/lg" className="dropdown-link"><i className="fa fa-address-card-o icon"></i>Reports</Link>
          </li>
          <li className="nav-item ">
          <Link to="/lg" className="dropdown-link"><i className="fa fa-commenting-o icon"></i>PS Chart</Link>
          </li>
          <li className="nav-item ">
          <Link to="/lg" className="dropdown-link"><i className="fa fa-list-alt icon"></i>To Do</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
  }
