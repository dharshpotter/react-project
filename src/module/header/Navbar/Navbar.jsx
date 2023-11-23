import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.style.css";
import { AppContext } from "../../../context/AppContext";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../components/store";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const { searchMovies, setSearchMovies } = useContext(AppContext);
  function getValue(event) {
    setSearchMovies(event.target.value);
  }
  function submit(event) {
    event.preventDefault();
    getValue();
  }
  function login() {
    navigate("./login");
  }
  function signup() {
    navigate("./signup");
  }
  function logout() {
    dispatch(actions.authActions.logout());
  }
  return (
    <nav className="navbar pt-2 bg-secondary text-light">
      {!isAuth && (
        <Link to={"./"} className="nav-link" id="brand">
          Dharsh
        </Link>
      )}
      <div className="primary-menus bg-secondary text-light" >
        {isAuth && (
          <ul className="navigation-menus bg-secondary text-light" >
            <li className="navigation-items bg-secondary text-light" >
              <Link to={"./react"} className="nav-link my-2" id="navi">
                Home
              </Link>
            </li>
            <li className="navigation-items bg-secondary text-light">
              <Link to={"./movies"} className="nav-link my-2" id="navi">
                Movies
              </Link>
            </li>
            <li className="navigation-items bg-secondary text-light my-2">
              <Link to={"./land"} className="nav-link" id="navi">
                Tv shows
              </Link>
            </li>
            <li className="navigation-items bg-secondary text-light my-1" id="search">
              <form role="search" onSubmit={getValue}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movies & Tv Shows"
                  aria-label="Search"
                  value={searchMovies}
                  onChange={getValue}
                />
              </form>
            </li>
            <li className="navigation-items bg-secondary text-light my-1" >
              <button className="btn btn-light" onClick={logout} id="logout-btnn">
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="secondary-menus bg-secondary text-light" id="signup">
        {!isAuth && (
          <>
            <ul className="navigation-buttons bg-secondary text-light" >
              
              <li className="navigation-button bg-secondary text-light" >
                <button onClick={signup} className="btn btn-light" id="signup-btnn">
                  SignUp
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarPage;
