import "./Navbar.scss";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navs = () => {
  return (
    <>
      <Navbar className="cl-navigation" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <i className="fa fa-bolt icon"></i>Masters
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa fa-users icon"></i>Customers
              </Nav.Link>
              <Nav.Link href="">
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
              <Nav.Link href="#link">
                <i className="fa fa-user icon"></i>User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
