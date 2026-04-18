import { styles } from "./styles";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {/* Left Section */}
            <div className={styles.leftBox}>
              <h1 className={styles.heading}>Get in touch:</h1>

              <p className={styles.subText}>
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className={styles.infoRow}>
                <svg className={styles.icon} />
                <div className={styles.infoText}>
                  Bhopal , India
                </div>
              </div>

              {/* Phone */}
              

              {/* Email */}
              <div className={styles.infoRowTiny}>
                <svg className={styles.icon} />
                <div className={styles.infoText}>sahilbainya2005@gmail.com</div>
              </div>
            </div>

            {/* Form Section */}
            <form className={styles.form}>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className={styles.input}
                />
              </div>

              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
