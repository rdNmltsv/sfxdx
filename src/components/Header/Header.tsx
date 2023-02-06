import React, { FC } from "react";
import styles from "./Header.module.scss";
import ConnectButton from "../ConnectButton/ConnectButton";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo_container}>
          <img
            src={process.env.PUBLIC_URL + "assets/logos/logo_sfxdx.svg"}
            alt="SFXDX logo"
          />
        </div>
        <div className={styles.connect_container}>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
