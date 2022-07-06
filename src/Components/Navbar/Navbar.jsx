import "./Navbar.scss";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import NavDropdown from "react-bootstrap/NavDropdown";


export const Navs = () => {
  return (
    <>
      <Navbar className="cl-navigation" expand="lg">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item >
               <Link className="nav-link" to="/"> <i className="fa fa-bolt icon"></i>Masters</Link>
              </Nav.Item>
              <Nav.Item>
              <Link to="/form" className="nav-link">  <i className="fa fa-users icon"></i>Customers</Link>
              </Nav.Item>
              <Nav.Item >
                <Link to=""className="nav-link"> <i className="fa fa-calculator icon"></i>Accounts</Link>
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
