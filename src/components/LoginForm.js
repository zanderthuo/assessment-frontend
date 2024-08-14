import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Container, Row, Col, Card, Image, Alert, Button } from 'react-bootstrap';
import { login } from '../redux/actions/authActions'; // Adjust the path if necessary
import Logo from '../images/logo.svg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading } = useSelector((state) => state.auth); // Adjust based on your state structure
  const [alert, setAlert] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Clear previous alert
      setAlert(null);
      await dispatch(login({ username, password })).unwrap();
      // Redirect to dashboard or another page on successful login
      history.push('/'); // Adjust the path as necessary
    } catch (error) {
      // Set alert with error message
      setAlert(error.message || "An error occurred");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header style={{ backgroundColor: '#003D4C' }}>
              <div className="d-flex justify-content-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  height="50"
                  className="d-inline-block align-top"
                />
              </div>
            </Card.Header>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="text-center" style={{ color: '#003D4C' }}>
                Sign In
              </Card.Title>
              
              {alert && <Alert variant="danger">{alert}</Alert>}
              {loading && <Alert variant="info">Logging in...</Alert>}
              
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
