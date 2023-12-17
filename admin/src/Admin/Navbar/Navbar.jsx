import React from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <body>
      <div className={styles.sidebar}>
        <div className="logoContent">
          <div className="logo">
            <div className="logoName">Netflix Cinema</div>
          </div>
          <div className="content">
            <ul className={styles.navList}>
              <li>
                <a href="#">Users</a>
              </li>
              <li>
                <a href="#">Films</a>
              </li>
              <li>
                <a href="#">Showtime</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Navbar;
