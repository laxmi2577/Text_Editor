import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* Logo or Title */}
          <Link className="navbar-brand" to="/">
            {props.logo ? (
              <img src={props.logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
            ) : (
              props.Title
            )}
          </Link>

          {/* Navbar Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  {props.About}
                </NavLink>
              </li>
            </ul>

           
            {/* User Profile (optional) */}
            {props.userProfile && (
              <div className="d-flex align-items-center">
                <img
                  src={props.userProfile.avatar}
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <span>{props.userProfile.name}</span>
              </div>
            )}

            {/* Dark Mode Toggle */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMod}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === "light" ? (
                  <i className="fas fa-moon" aria-hidden="true"></i>
                ) : (
                  <i className="fas fa-sun" aria-hidden="true"></i>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Footer with Social Media Links */}
        <div className="navbar-footer">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/laxmi2577" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/laxmiranjan/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  Title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  logo: PropTypes.string,  // Optional logo image URL
  userProfile: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }), // Optional user profile information
  toggleMod: PropTypes.func.isRequired,  // Toggle dark/light mode function
  mode: PropTypes.string.isRequired,  // "light" or "dark" mode
};

NavBar.defaultProps = {
  Title: "TextEditor",
  About: "About",
  logo: "",
  userProfile: null,
};
