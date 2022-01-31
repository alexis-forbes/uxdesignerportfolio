/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar = ({ lr, nr, theme }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""
        }`}
    >
      <div className="container">
        <Link href="/homepage/home7-light">
          <a className="nav-item">
            Laura Catalán
          </a>
        </Link>

        {/*
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src="/img/logo-dark.png" alt="logo" />
              ) : (
                <img ref={lr} src="/img/logo-light.png" alt="logo" />
              )
            ) : (
              <img ref={lr} src="/img/logo-light.png" alt="logo" />
            )}
          </a>
        </Link>
            */}

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/homepage/home7-light">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href="/project-details2/project-details2-light-sitandeat">
                  <a className="dropdown-item">Sit&Eat</a>
                </Link>
                <Link href="/project-details2/project-details2-light-livehelp">
                  <a className="dropdown-item">LiveHelp</a>
                </Link>
                <Link href="/project-details2/project-details2-light-cinemaz">
                  <a className="dropdown-item">Cinemaz</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-light">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
