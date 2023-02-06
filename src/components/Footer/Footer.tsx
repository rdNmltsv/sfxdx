import React from "react";
import styles from "./Footer.module.scss";
import { getYear } from "../../utils/date";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.links}>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.logo_container}>
            <img
              src={process.env.PUBLIC_URL + "assets/logos/logo_sfxdx.svg"}
              alt="SFXDX logo"
            />
          </div>
          <div className={styles.icons_container}>
            <div className={styles.icon}>
              <a href="https://www.facebook.com/" rel="noreferrer noopener">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/facebook.svg"}
                  alt="facebook icon link"
                />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://twitter.com/" rel="noreferrer noopener">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/twitter.svg"}
                  alt="twitter icon link"
                />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.youtube.com/" rel="noreferrer noopener">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/youtube.svg"}
                  alt="youtube icon link"
                />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.instagram.com/" rel="noreferrer noopener">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/instagram.svg"}
                  alt="instagram icon link"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          ©{getYear()} All rights reserved. Powered by Atla
        </div>
      </div>
    </footer>
  );
};

export default Footer;
