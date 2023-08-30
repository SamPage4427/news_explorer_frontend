import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import CurrentPageContext from "../contexts/CurrentPageContext.js";
import logout from "../images/logout.png";

function MobileMenu({ onClose, onSigninClick, onSignoutClick }) {
  const { currentPage } = useContext(CurrentPageContext);
  const isLoggedIn = false;

  return (
    <div className="mobile">
      {isLoggedIn && currentPage === "/" ? (
        <div className="mobile__container_signed-in">
          <div className="mobile__header">
            <NavLink to="/" className="nav__link">
              <h2 className="mobile__title">NewsExplorer</h2>
            </NavLink>
            <button className="mobile__close" onClick={onClose} />
          </div>
          <ul className="mobile__menu">
            <li className="mobile__item">
              <NavLink to="/" className="nav__link">
                <button className="mobile__home">Home</button>
              </NavLink>
            </li>
            <li className="mobile__item">
              <NavLink to="/saved-news" className="nav__link">
                <button className="mobile__saved">Saved Articles</button>
              </NavLink>
            </li>
            <li className="mobile__item">
              <button
                className="mobile__profile_signed-in"
                onClick={onSignoutClick}
              >
                <h2 className="mobile__username">Sam</h2>
                <img className="mobile__logout" src={logout} alt="logout" />
              </button>
            </li>
          </ul>
        </div>
      ) : isLoggedIn && currentPage === "/saved-news" ? (
        <div className="mobile__container_signed-in">
          <div className="mobile__header">
            <NavLink to="/" className="nav__link">
              <h2 className="mobile__title">NewsExplorer</h2>
            </NavLink>
            <button className="mobile__close" onClick={onClose} />
          </div>
          <ul className="mobile__menu">
            <li className="mobile__item">
              <NavLink to="/" className="nav__link">
                <button className="mobile__home">Home</button>
              </NavLink>
            </li>
            <li className="mobile__item">
              <NavLink to="/saved-news" className="nav__link">
                <button className="mobile__saved">Saved Articles</button>
              </NavLink>
            </li>
            <li className="mobile__item">
              <button
                className="mobile__profile_signed-in"
                onClick={onSignoutClick}
              >
                <h2 className="mobile__username">Sam</h2>
                <img className="mobile__logout" src={logout} alt="logout" />
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mobile__container">
          <div className="mobile__header">
            <NavLink to="/" className="nav__link">
              <h2 className="mobile__title">NewsExplorer</h2>
            </NavLink>
            <button className="mobile__close" onClick={onClose} />
          </div>
          <ul className="mobile__menu">
            <NavLink to="/" className="nav__link">
              <button className="mobile__home">Home</button>
            </NavLink>
            <button
              className="mobile__profile"
              type="button"
              onClick={onSigninClick}
            >
              Sign In
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
