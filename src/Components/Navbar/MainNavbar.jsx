  import "./Navbar.scss";
  import React  from "react";
  import Dropdown from "react-bootstrap/Dropdown";
  import Container from "react-bootstrap/Container";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import {Link, useNavigate } from "react-router-dom";
  export const MainNavbar = () =>{ 
    const dropmenu = [
      {name: "voucher 1", icon: <i className="fa fa-bolt icon"></i>,
      submenu: [
        // {name: "voucher 2.1", submenu: null},
        // {name: "voucher 2.2", submenu: null},
        {name: "voucher 2.3",
        submenu: [
          {name: "voucher 2.3.1", submenu: null},
          {name: "voucher 2.3.2", submenu: null},
          {name: "voucher 2.3.3", submenu: null},
        ]
      },
      ]
    },
    {name: "Customer", icon: <i className="fa fa-file-text-o icon"></i>, submenu: null}
    ]
  return (
    <>
  <nav id="site-navigation " className="navbar navbar-expand-lg  cl-navigation">
    <div className="container-fluid">
      <div className="navbar-collapse custom-collapsed" id="navbarCollapse">
        {dropmenu.map((menu, index) => {
        return (
          <>
          <ul className="navbar-nav cl-navbar">
          <li className="nav-item dropdown cl-dropdown ">
            <span className="nav-link dropdown-toggle" 
            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {menu.icon} {menu.name}</span>
            <i className="fa fa-angle-down down-icon" />
            {menu.submenu && menu.submenu.map((item)=>{
              return(
                <>
                <ul className="dropdown-menu cl-dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/lg" className="dropdown-link">{item.name}</Link>
                  </li>
                  {item.submenu && item.submenu.map ((menu) => {
                    return (
                      <>
                      <li className="dropdown dropdown-item">
                      <Link to="/lg" className="dropdown-link">{menu.name}</Link>
                        <i className="fa fa-angle-right down-icon" />
                        {item.submenu && item.submenu.map ((menuChild) => {
                          return (
                            <>
                          <ul className="dropdown-menu cl-dropdown-menu dropdown-submenu">
                            <li className="dropdown-item"> 
                            <Link to="/lg" className="dropdown-link">{menuChild.name}</Link>
                            </li>
                            <li className="dropdown-item dropdown"> 
                            <Link to="/lg" className="dropdown-link">{menuChild.name}</Link>
                            <i className="fa fa-angle-right down-icon" />
                            {item.submenu && item.submenu.map ((Child) => {
                              return (
                                <>
                                <ul className="dropdown-menu dropdown-submenu-left">
                                  <li className="dropdown-item">
                                  <Link to="/lg" className="dropdown-link">{Child.name}</Link>
                                    </li>
                                </ul>
                               </>
                              );
                            })}
                            </li>
                          </ul> 
                          </>
                         );
                       })}
                      </li>
                      {/* <li className="dropdown-item">
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 2</Link>
                      </li>
                      <li className="dropdown-item">
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 3</Link>
                      </li>
                      <li className="dropdown-item">
                      <Link to="/lg" className="dropdown-link">Ledger Voucher 4</Link>
                      </li> */}
                      </>
                    );
                  })}
                </ul>
              </>
              );
            })}
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
          </>
        )
        })}
      </div>
    </div>
  </nav>
  </>
  )
  }
