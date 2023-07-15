import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/aim.png";
import { Link } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
function Navigation() {
  const {user} = useSelector(state=>state.auth);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "50px" }} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="add-goal">Add Goal</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-goal'>Show Goals</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-admin'>Show Admin</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-user'>Show Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-user' className="text-decoration-none fw-bold text-dark">Hello {user?.name}</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
