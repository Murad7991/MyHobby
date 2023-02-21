import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import logoImage from "../assets/images/logo.png.webp";
import "../assets/css/components/header.scss";
const Header = () => {
  return (
    <header>
      <div className="main-menu container">
        <div className="logo-img">
          <a href="#">
            <img src={logoImage} alt="logoImage" />
          </a>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="nav-icons">
            <ShoppingCartIcon style={{ fontSize: "17px" }} />
            <SearchIcon style={{ fontSize: "17px" }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
