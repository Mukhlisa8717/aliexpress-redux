import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoBook, IoCart, IoHeart } from "react-icons/io5";
import { PiScanSmileyFill } from "react-icons/pi";
import { SiFireship } from "react-icons/si";
import WhiteLogo from "../../assets/whiteLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <NavLink className="navbar__logo" to={"/"}>
            <img src={WhiteLogo} alt="AliExpress" />
          </NavLink>
          <div className="navbar__menu">
            <button className="navigation__btn">
              <div className="navigation__btn-item">
                <IoBook size={24} />
                <span>Catalog</span>
              </div>
            </button>
            <form action="" className="search__form">
              <input type="text" placeholder="coat" />
              <button>Find</button>
            </form>
            <ul className="navigation__list">
              <li>
                <NavLink className="navigation__btn" to={"/wishlist"}>
                  <div className="navigation__btn-item">
                    <IoHeart size={24} />
                    <span>Likes</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navigation__btn" to={"/cart"}>
                  <div className="navigation__btn-item">
                    <IoCart size={24} />
                    <span>Cart</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navigation__btn" to={"/chart"}>
                  <div className="navigation__btn-item">
                    <FaChartPie size={24} />
                    <span>Chart</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="second__nav">
          <div>
            <Link
              className="second__nav-link"
              to={
                "https://promotion.aliexpress.ru/wow/gcp/aer/channel/aer/aerflashdeals/DFG3HDMPTr?spm=a2g2w.home.diamond.1.75df5586IOWHSr&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&_ga=2.113948999.1773727852.1716300451-1158400750.1716300451"
              }
            >
              <span>Flash deals</span>
              <SiFireship size={14} color="orange" />
            </Link>
            <Link
              className="second__nav-link"
              to={
                "https://promotion.aliexpress.ru/wow/gcp/aer/daily/aer/nn/GNhAhQrcKG?spm=a2g2w.home.diamond.2.75df5586IOWHSr&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&_ga=2.88291931.1773727852.1716300451-1158400750.1716300451"
              }
            >
              <span>One price</span>
            </Link>
          </div>
          <div>
            <button className="second__nav-btn">
              <FaLocationDot />
              <span>O'zbekiston</span>
            </button>
            <button className="second__nav-btn">
              <span>EN</span>
            </button>
            <button className="second__nav-btn">
              <span>UZS</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
