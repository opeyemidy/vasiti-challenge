import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function header() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul> */}
      <Navbar className="justify-content-between mx-5">
        <Link to="/" className="navbar-brand">
          <img alt="" src="/img/Vasiti-Logo.png" className="d-inline-block" />
        </Link>

        <Nav className="align-items-center d-none d-md-flex">
          <Nav.Item>
            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/stories" className="nav-link">
              STORIES
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </Nav.Item>
          <Link to="/login" className="nav-link">
            LOG IN
          </Link>
          <Nav.Item>
            <Link to="/register" className="nav-link btn-signup">
              SIGN UP
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div
        style={{ height: '50px', border: '1px solid rgba(0, 0, 0, 0.08)' }}
        className="d-none d-md-flex justify-content-center my-3"
      >
        <Navbar className="justify-content-between mx-5 ">
          <Nav className="align-items-center" activeKey="/home">
            <Nav.Item>
              <Link to="/about" className="nav-link">
                MARKETPLACE
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/stories" className="nav-link">
                WHOLESALE CENTER
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                SELLER CENTER
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                SERVICES
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                INTERNSHIPS
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                EVENTS
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
