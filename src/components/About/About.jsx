import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/bgImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Python Programming Certificate</h3>
                <p>Completed an online course covering Python programming 
                  fundamentals in January 2023 </p>

            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Meta Front-end Development Certificate</h3>
                <p>Completed an online course of meta professional front-end 
                  -development in January 2024 </p>

              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
          <h3>Google Data-analytics</h3>
                <p> Currently learning about Intro data analytics
                  on coursera

                </p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};