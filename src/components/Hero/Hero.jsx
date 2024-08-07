import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Sarim</h1>
        <p className={styles.description}>
        A dedicated 5th-semester student with a strong foundation in 
        C/C++, Python and MERN.My hands-on experience includes projects like
        a flight management system and a calculator application, 
        showcasing my practical skills in software development. 
        </p>
        <a href="mailto:sarimbinasif12345@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
    
        <a href="https://drive.google.com/file/d/12lPL9uaKcduqI7qOMR8dRiztKVHBg09T/view?usp=sharing" className={styles.contactBtn}>
         View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


