import React, { useEffect, useState } from "react";
import { Table, Form, Container, Button, Modal, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  getAllUsers,
  createUser,
  editUser,
} from "../redux/actions/allUsersActions"; // Adjust path to your action file

const ListUsers = () => {
  const dispatch = useDispatch();
  const { users = [], loading, error } = useSelector((state) => state.allUsers); // Default to empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    usrFirstname: "",
    usrLastname: "",
    usrUsername: "",
    usrId: "",
  });
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    setSelectedUser({
      usrFirstname: "",
      usrLastname: "",
      usrUsername: "",
      usrId: "",
    });
    setEditMode(false);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    const filteredUser = Object.fromEntries(
      Object.entries(user).filter(([key, value]) => value !== null)
    );
    setSelectedUser(filteredUser);
    setEditMode(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAlert({ show: false, message: "", type: "" }); // Clear alert when closing the modal
  };

  const handleSaveUser = async () => {
    try {
      if (editMode) {
        await dispatch(
          editUser({ token: Cookies.get("token"), payload: selectedUser })
        );
        setAlert({
          show: true,
          message: "User updated successfully!",
          type: "success",
        });
      } else {
        await dispatch(createUser(selectedUser));
        setAlert({
          show: true,
          message: "User created successfully!",
          type: "success",
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        message: error.message || "An error occurred",
        type: "danger",
      });
    }
    setShowModal(false);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.usrFirstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.usrLastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.usrUsername.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Form.Group className="mt-3 mb-3" controlId="search">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Button className="mb-3" onClick={handleCreateUser}>
        Create User
      </Button>

      {/* Alert Component */}
      {alert.show && (
        <Alert
          variant={alert.type}
          onClose={() => setAlert({ show: false, message: "", type: "" })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.usrFirstname}</td>
              <td>{item.usrLastname}</td>
              <td>{item.usrUsername}</td>
              <td>{item.usrStatus}</td>
              <td>{item.usrCdate}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditUser(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit User" : "Create User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={selectedUser.usrFirstname}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    usrFirstname: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={selectedUser.usrLastname}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    usrLastname: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={selectedUser.usrUsername}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    usrUsername: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            {editMode ? "Save Changes" : "Create User"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListUsers;
