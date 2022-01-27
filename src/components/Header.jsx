import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
          <Container className='py-2'>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
              <img
                alt="logo"
                src="/img/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
              />
              <img src="/img/product.png" alt="product" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link href="#home" className='active fw-bold'>Product</Nav.Link>
                <Nav.Link href="#features">Customers</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Resources</Nav.Link>
                <Nav.Link href="#pricing" className="btn outline-gray bg-transparent mx-lg-2 my-2 px-4">Sign In</Nav.Link>
                <Nav.Link href="#pricing" className="btn bg-var-green text-white mx-lg-2 my-2 px-4">Sign Up</Nav.Link>
                <Nav.Link href="" className='rounded-circle'>
                  <img
                    alt="logo"
                    src="/img/switch-theme.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top ms-2"
                  />
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
export default Header