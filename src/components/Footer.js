import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#010100",
  };
  return (
    <footer style={footerStyle} className="mt-auto py-3 text-light">
      <Container>
        <Row>
          <Col md={6}>
            <p>© {new Date().getFullYear()} KCB Bank</p>
          </Col>
          <Col md={6} className="text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#home" className="text-light">
                  Home
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#about" className="text-light">
                  About
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#contact" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
