import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserStoreContext } from "../context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/reducers/actions/authAction";

const NavBar = () => {
  const history = useHistory();
  const userStore = React.useContext(UserStoreContext);
  const profileRedux = useSelector((state) => state.authReducer.profile);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch();
  // const [profile, setProfile] = React.useState(null);
  const getProfile = () => {
    localStorage.getItem("profile");
    const profilValue = JSON.parse(localStorage.getItem("profile"));
    if (profilValue) {
      // setProfile(profilValue);
      //userStore.updateProfile(profilValue);
      dispatch(updateProfile(profilValue));
    }
  };
  React.useEffect(() => {
    getProfile();
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    history.replace("/");
    history.go(0);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/" exact>
            React-Bootstrap
          </NavLink>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
              <NavLink className="nav-link" to="cart">
                Cart {total} Item(s)
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
              <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/hospitalPage");
                  }}
                >
                  Hospital List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/category");
                  }}
                >
                  News Category
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/upload"
              >
                Upload
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/member"
              >
                {/* Member {profileRedux.name} */}
              </NavLink>
            </Nav>
            {profileRedux ? (
              <span className="nav-text">
                Welcome {profileRedux.name}{" "}
                <button className="btn btn-danger ml-2" onClick={logout}>
                  Logout
                </button>
              </span>
            ) : (
              <>
                <Nav>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/register"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
