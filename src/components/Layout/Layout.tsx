import React, { FC } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Background />
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
