import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import css from "./NavBar.module.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <nav className={css.navBar}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className={css.logo} />
      </Link>

      <ul className={css.navBarMenu}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? css.active : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? css.active : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? css.active : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? css.active : ""}
        >
          contact us
        </a>
      </ul>
      <div className={css.navBarRight}>
        <img src={assets.search_icon} alt="Search_Icon" />
        <div className={css.navBarSearchIcon}>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : css.dot}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className={css.navbarProfile}>
            <img src={assets.profile_icon} alt="" />
            <ul className={css.navProfileDropdown}>
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Bag icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
