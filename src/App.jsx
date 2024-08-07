import styles from "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import {Hero} from "./components/Hero/Hero"
import {About} from "./components/About/About"

import {SE} from "./components/SE/SE"


import {Projects} from "./components/Projects/Projects"
import  {Contact} from "./components/Contact/Contact"


function App() {
  // styles.App => App is actual class name defined in modules.css
  return <div className={styles.App}>

    <Navbar/>
    <Hero/>
    <About/>
    <SE/>
    <Projects/>
    <Contact/>
  </div>
}

export default App
