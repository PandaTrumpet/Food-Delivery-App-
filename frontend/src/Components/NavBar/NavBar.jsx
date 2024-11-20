import { assets } from "../../assets/assets.js";
import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const NavBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navBar}>
      <img src={assets.logo} alt="logo" className={css.logo} />
      <ul className={css.navBarMenu}>
        <NavLink className={buildLinkClass}>Home</NavLink>
        <NavLink className={buildLinkClass}>Menu</NavLink>
        <NavLink className={buildLinkClass}>Mobile-App</NavLink>
        <NavLink className={buildLinkClass}>Contact Us</NavLink>
      </ul>
      <div className={css.navBarRight}>
        <img src={assets.search_icon} alt="Search_Icon" />
        <div className={css.navBarSearchIcon}>
          <img src={assets.basket_icon} alt="" />
          <div className={css.dot}></div>
          <button>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
