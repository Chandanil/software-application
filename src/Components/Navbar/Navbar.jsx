import "./Navbar.scss";
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// import NavDropdown from "react-bootstrap/NavDropdown";


export const Navs = () => {
  const [show, setShow] = useState();
  const dropmenu= [
    {name: "Voucher"},
    {name: "dropdown 1",  children: null},
    {name: "dropdown 2", 
     children: [{
      name: "dropdown 2.1",
      children: null
     },
    {
      name: "dropdown 2.2",
      children: null
    },
    {
      name: "dropdown 2.3",
      children: [{
          name: "Ashish",
          children: null
          },
          {name: "Chandani",
          children: "null"
          },
      ]
    },
    ]
  },
    {name: "dropdown 3",  children: null},
    {name: "dropdown 4", 
    children: [{
     name: "dropdown 4.1",
     children: null
    },
   {
     name: "dropdown 4.1",
     children: null
   },
   {
     name: "dropdown 4.1",
     children: [{
       name: "dropdown 4.1.1",
       children: null
     },
     {name: "dropdown 4.1.1",
     children: "null"
   },
   ]
   },
   ]
 },
  ]
  return (
    <>
      <Navbar className="cl-navigation" expand="lg">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* {dropmenu.map((menu) => {
              
              return (
                <div>
              <Dropdown className="cl-dropdown">            
                <Dropdown.Toggle className="dropdown-btn nav-item ">
                 <i className="fa fa-bolt icon"></i><span> {menu.name}</span>
                 
                </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu cl-dropdown-menu">
                  {menu.children &&
                    menu.children.map((item) => {
                      return(
                        <Dropdown.Item >
                         {item.name}
                          <div className="right">
                          {item.children && item.children.map((child)=>{
                            return(
                                <Dropdown.Item >{child.name}</Dropdown.Item>
                                )
                              })}
                              </div>
                          
                        </Dropdown.Item >
                      );
                    })}
              </Dropdown.Menu>
              </Dropdown>
            </div>
            );
          })} */}
              <div className="cl-dropdown">
              <Dropdown.Item className="dropdown"> <i className="fa fa-bolt icon"></i>Reports</Dropdown.Item>
                <Dropdown.Menu className="dropdown-menu cl-dropdown-menu">
                  <Dropdown.Item href="#/action-1">Ledger
                  <Dropdown.Menu className="dropdown-menu cl-dropdown-menu dropdown-submenu ">
                      <Dropdown.Item >Chandani</Dropdown.Item>
                      <Dropdown.Item >Kiran</Dropdown.Item>
                      <Dropdown.Item >Moon</Dropdown.Item>
                  </Dropdown.Menu>
                   </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Cash/ Bank Book</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Day Book</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Transaction List</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Trial Balance Detail</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Trial Balance Summary</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">balance Sheet</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Profi and Loss Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Cash Flow Statement</Dropdown.Item>
                </Dropdown.Menu>
              </div>
              <Nav.Item >
                <Link to="/form"className="nav-link"> <i className="fa fa-calculator icon"></i>Customers</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="" className="nav-link"><i className="fa fa-info-circle icon"></i>Transaction</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="" className="nav-link"><i className="fa fa-file-text-o icon"></i>Reports</Link>
              </Nav.Item>
              <Nav.Item >
                <Link to="" className="nav-link"><i className="fa fa-commenting-o icon"></i>PDS Chat</Link>
              </Nav.Item>
              <Nav.Item >
                <Link to="" className="nav-link"><i className="fa fa-list-alt icon"></i>To do</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="" className="nav-link"><i className="fa fa-calendar icon"></i>Calendar</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
