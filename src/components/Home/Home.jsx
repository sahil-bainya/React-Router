import { Link } from "react-router-dom";
import { styles } from "./styles.js";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <aside className={styles.aside}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>
             React Router Demo App
              <span className={styles.subHeading}>Explore navigation, nested routes, and API data fetching</span>
            </h2>

            <Link to="/" className={styles.button}>
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Explore App
            </Link>
          </div>
        </div>

        {/* Background Image */}
        <div className={styles.imageWrapper}>
          <img
            className={styles.mainImage}
            src="https://gofloaters.com/work-from-anywhere-toolkit/assets/images/remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      {/* Bottom Image */}
      <div className={styles.bottomSection}>
        <img
          className={styles.bottomImage}
          src="https://globalvoices.org/wp-content/uploads/2021/05/Remote1-1-800x465.png"
          alt="image2"
        />
      </div>

      {/* Footer Text */}
      <h1 className={styles.footerText}>Routing • Components • API Integration</h1>
    </div>
  );
}
