import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import css from "./NavBar.module.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
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
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : css.dot}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </nav>
  );
};

export default NavBar;
