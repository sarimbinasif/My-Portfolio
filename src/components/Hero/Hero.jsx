import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Sarim</h1>
        <p className={styles.description}>
        A dedicated 7th-semester Computer Science student at FAST-NUCES 
        with a strong foundation in C/C++, Python, and the MERN stack. 
        I have hands-on experience building real-world applications such as a 
        flight management system (OOP), 
        a bookstore and blog platform (MERN), 
        and a contact manager (Spring Boot, Java).
        <br></br>
        My academic background includes solid knowledge of core CS subjects like 
        Data Structures and Algorithms (DSA), Programming Fundamentals (PF), 
        Database Systems (DB), Design and Analysis of Algorithms (DAA), 
        Computer Networks (CN), and Artificial Intelligence (AI). 
        I’m passionate about full-stack development and constantly strive to apply theoretical concepts through practical implementation.

        </p>
        <a href="mailto:sarimbinasif12345@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
    
        <a href="https://drive.google.com/file/d/1muOmVZP4M6PLnaHXmZYnFiAN3TmgjZa2/view?usp=drive_link" className={styles.contactBtn}>
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


