import React from "react";
import { NavLink } from "react-router-dom";
import { LANG } from "./../../language/langs";

const index = ({setLang, lang}) => {
  const languages = LANG[lang]
  const {HOME, ABOUT, PROJECTS, PROFIL, SETTINGS, LOGOUT} = languages
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 t-0 ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  {HOME}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" href="#">
                  {ABOUT}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {PROJECTS}
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <select className="form-select mx-3" onChange={(e) => {setLang(e.target.value)}}>
              <option value="uz">UZ</option>
              <option value="eng">ENG</option>
            </select>
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    {PROFIL}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {SETTINGS}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {LOGOUT}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default index;
