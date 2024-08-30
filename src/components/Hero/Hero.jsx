import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Sarim</h1>
        <p className={styles.description}>
        A dedicated 5th-semester CS student at FAST-NUCES, with a strong foundation 
        in C/C++, Python, and MERN. My hands-on experience includes projects like a 
        flight management system(OOP), a bookstore(MERN), and a blog app(MERN), showcasing my practical skills in software development.
        </p>
        <a href="mailto:sarimbinasif12345@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
    
        <a href="https://drive.google.com/file/d/1i2mg_FZHukL6BM38ScF7d6y3KGi6oQkD/view?usp=drive_link" className={styles.contactBtn}>
         View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


