import { useState } from "react";
import { Navbar } from "./Home/Navbar";
// import { HomeForeground } from "./Home/HomeForeground";
// import { Navbar } from "./Home/Navbar";
// import { Planet } from "./Home/Planet";
import { HomeBox } from "./HomeBox/HomeBox";
// import { HomeBox } from "./HomeBox/HomeBox";
import { RadialGradient } from "./RadialGradient";
import styles from "./styles.module.css";
import "./variables.css";

const Home = () => {
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <RadialGradient />
      <Navbar />
      <HomeBox userNotFound={userNotFound} setUserNotFound={setUserNotFound} />
    </div>
  );
};

export default Home;
