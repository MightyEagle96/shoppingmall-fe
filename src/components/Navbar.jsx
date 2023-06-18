import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { msAutoLinks, navigationLinks } from "../routes";

function MyNavbar() {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCar} /> EAGLE MOTORS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigationLinks.map((c, i) => (
              <Nav.Link key={i} onClick={() => navigate(c.path)}>
                {c.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/checkout">
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCart />
              </Badge>
            </Nav.Link>
            {msAutoLinks.map((c, i) => (
              <Nav.Link
                key={i}
                onClick={() => {
                  {
                    c.type === "button" && c.action();

                    navigate(c.path);
                  }
                }}
              >
                {c.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
