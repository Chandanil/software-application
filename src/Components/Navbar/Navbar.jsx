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
              <Nav.Link to="/">
                <i className="fa fa-bolt icon"></i>Masters
              </Nav.Link>
              <Nav.Link to="/form">
                <i className="fa fa-users icon"></i>Customers
              </Nav.Link>
              <Nav.Link to="/">
                <i className="fa fa-calculator icon"></i>Accounts
              </Nav.Link>
              <Nav.Link href="">
                <i className="fa fa-info-circle icon"></i>Transaction
              </Nav.Link>
              <Nav.Link href="">
                <i className="fa fa-file-text-o icon"></i>Reports
              </Nav.Link>
              <Nav.Link href="">
                <i className="fa fa-commenting-o icon"></i>PDS Chat
              </Nav.Link>
              <Nav.Link href="">
                <i className="fa fa-list-alt icon"></i>To do
              </Nav.Link>
              <Nav.Link href="">
                <i className="fa fa-calendar icon"></i>Calendar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
