import { assets } from "../../assets/assets.js";
import css from "./NavBar.module.css";
import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className={css.navBar}>
      <img src={assets.logo} alt="logo" className={css.logo} />
      <ul className={css.navBarMenu}>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? css.active : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? css.active : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? css.active : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? css.active : ""}
        >
          contact us
        </li>
      </ul>
      <div className={css.navBarRight}>
        <img src={assets.search_icon} alt="Search_Icon" />
        <div className={css.navBarSearchIcon}>
          <img src={assets.basket_icon} alt="" />
          <div className={css.dot}></div>
        </div>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default NavBar;
