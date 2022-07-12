import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getSearch } from "../stores/action";
import "./Navbar.css";
function NavbarPage() {
  let activeStyle = {
    fontWeight: "500",
    textDecoration: "solid",
  };
  const location = useLocation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onChangeHandler(e) {
    setSearch(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let temp = search.split(" ").join("+");
    if (location.pathname === "/result") {
      dispatch(getSearch(temp));
      navigate(`/result?q=${temp}`);
    }
  }
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand>
            <NavLink className={"navbar_link"} to={"/"}>
              Google
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {location.pathname !== "/" && (
              <div
                className="d-flex justify-content-center mx-auto"
                style={{ width: "100%" }}
              >
                <Form onSubmit={(e) => submitHandler(e)} style={{ width: 400 }}>
                  <Form.Control
                    onChange={(e) => onChangeHandler(e)}
                    placeholder="Search"
                    style={{ borderRadius: 20, textAlign: "center" }}
                  ></Form.Control>
                </Form>
              </div>
            )}
            <Nav className="ms-auto">
              <Nav.Link>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                  to={"/images"}
                  className="navbar_link"
                >
                  Images
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                  className="navbar_link"
                  to={"/news"}
                >
                  News
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                  className="navbar_link"
                  to={"/readinglists"}
                >
                  Readinglists
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
