"use client";

import type { NextPage } from "next";
import { useState } from "react";
import { GradientBox } from "../components/GradientBox";
import { Header } from "./Header";
import { LoginOptions } from "./LoginOptions";
import { Octocat } from "./Octocat";
import styles from "./styles.module.css";
import { UserNotFound } from "./UserNotFound";

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Header />
      <GradientBox
        style={{
          width: 760,
          height: 360,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className={`${styles.gradientText} ${styles.h2}`}>
          #GitHubUnwrapped 2023
        </h2>
        <h1 className={styles.title}>Unlock your coding year in review</h1>
        <p>Get a personalized video of your GitHub activity in 2023.</p>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            width: "calc(100% - 80px)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {userNotFound && <UserNotFound />}
          <LoginOptions
            userNotFound={userNotFound}
            setUserNotFound={setUserNotFound}
            username={username}
            setUsername={setUsername}
          />
        </div>
        <Octocat userNotFound={userNotFound} />
      </GradientBox>
    </div>
  );
};

export default Home;
