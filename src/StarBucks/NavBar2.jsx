import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./NavBar2.css";

function NavBar2() {
  return (
    <div>
      <Navbar expand="lg" className=" justify-content-between">
        <Container>
          <Navbar.Brand href="#home">
            <a href="#">
              <img
                className="logo"
                src="./images/Starbucks_Corporation_Logo_2011.svg.png"
                alt=""
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          
            <Nav className="headerLink me-auto ">
              <Nav.Link href="#home" className="headerLink">MENU</Nav.Link>
              <Nav.Link href="#link" className="headerLink">REWARDS</Nav.Link>
              <Nav.Link href="#link" className="headerLink">GIFT CARDS</Nav.Link>
            </Nav>
          
          <Nav.Link href="#link" className="headerLink">Find a Store</Nav.Link>
          <Button variant="light" style={{borderRadius:"1.5rem", border:"2px solid black", margin:"10px"}} type="submit">
            Sign In
          </Button>
          <Button variant="dark" style={{borderRadius:"1.5rem"}} type="submit">
            Join Now
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar2;
