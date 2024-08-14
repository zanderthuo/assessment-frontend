import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Navbar, Button, Image } from "react-bootstrap";
import Logo from "../images/logo.svg";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions'; // Adjust the path if necessary

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem('user'));
  const token = Cookies.get('token');

  // Define styles
  const navbarStyle = {
    backgroundColor: "#003D4C",
    color: "#fff",
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      history.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Handle navigation
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Navbar style={navbarStyle}>
      <Container>
        {location.pathname !== "/" && (
          <Navbar.Brand onClick={handleGoBack} style={{ cursor: "pointer" }}>
            <Button variant="outline-light">Back</Button>
          </Navbar.Brand>
        )}
        <Navbar.Brand href="/">
          <Image
            src={Logo}
            alt="Logo"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user || token ? (
              <Button
                style={{ color: "#fff" }}
                variant="outline-light"
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                style={{ color: "#fff" }}
                variant="outline-light"
                href="/login"
              >
                Sign In
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
