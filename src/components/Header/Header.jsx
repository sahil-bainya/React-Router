import { Link, NavLink } from "react-router-dom";
import { styles } from "./styles.js";
import React from "react";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoWrapper}>
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className={styles.logo}
              alt="Logo"
            />
          </Link>

          <div className={styles.rightSection}>
            <Link to="#" className={styles.loginBtn}>
              Log in
            </Link>

            <Link to="#" className={styles.registerBtn}>
              Get started
            </Link>
          </div>

          <div className={styles.menuWrapper} id="mobile-menu-2">
            <ul className={styles.ul}>
              <li>
                <NavLink
                  to="/"
                  className={({
                    isActive,
                  }) => `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-gray-700"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({
                    isActive,
                  }) => `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-gray-700"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({
                    isActive,
                  }) => `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-gray-700"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({
                    isActive,
                  }) => `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-gray-700"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
