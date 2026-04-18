import { Link } from "react-router-dom";
import {styles} from "./styles.js"
export default function Footer() {

 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section */}
        <div className={styles.topSection}>
          
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logoLink}>
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className={styles.logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className={styles.grid}>
            
            {/* Resources */}
            <div>
              <h2 className={styles.sectionTitle}>Resources</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={styles.link}>About</Link>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h2 className={styles.sectionTitle}>Follow us</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className={styles.link}>Discord</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className={styles.sectionTitle}>Legal</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link to="#" className={styles.link}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          
          <span className={styles.copyright}>
            © 2023{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className={styles.link}
            >
              hiteshchoudhary
            </a>{" "}
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className={styles.socialWrapper}>
            
            <Link to="#" className={styles.socialLink}>
              <svg className={styles.icon} />
            </Link>

            <Link to="#" className={styles.socialLink}>
              <svg className={styles.icon} />
            </Link>

            <Link to="#" className={styles.socialLink}>
              <svg className={styles.icon} />
            </Link>

            <Link to="#" className={styles.socialLink}>
              <svg className={styles.icon} />
            </Link>

            <Link to="#" className={styles.socialLink}>
              <svg className={styles.icon} />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}