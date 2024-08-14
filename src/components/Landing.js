import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  jumbotronStyle,
  buttonStyle,
  linkStyle,
  sectionStyle,
} from '../styles/AllStyles.js';

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="jumbotron" style={jumbotronStyle}>
            <h1>Welcome to User Management System!</h1>
            <p>Efficiently manage users with our comprehensive user management service.</p>
            <p>
              <Button style={buttonStyle} variant="outline-dark" size="sm" className="mt-3">
                <Link style={linkStyle} to="/login">
                  Get Started
                </Link>
              </Button>
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <section style={sectionStyle} id="about">
            <h2>About Our Service</h2>
            <p>
              Our user management system allows you to easily create, edit, and manage user accounts. 
              Whether you're an administrator overseeing multiple users or a manager delegating tasks, 
              our system provides all the tools you need to keep your user base organized and efficient.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
