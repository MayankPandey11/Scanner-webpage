import React, { useState, useEffect } from "react";
import logo from "../assets/unfluke.png";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div>
      <nav className={` ${sticky ? "dark-nav" : "dark"}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-checks-grid"
              viewBox="0 0 16 16"
            >
              <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
            </svg>
            <span > Leaderboard</span>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle hov"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Historical Trading
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Trending
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Order
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Holding
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Position
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
            
            >
              Historical Chart
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-220}
              duration={500}
            
            >
              Scanners
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
             
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} >
              Basic Backtest
            </Link>
          </li>
          <li>
            <Link to="contact" >
              Advanced Backtest
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} >
              Pricing
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} >
              My Earnings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
