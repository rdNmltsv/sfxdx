import React, { useEffect } from "react";
import styles from "./Background.module.scss";
import cn from "classnames";
import animation from "./animation";

const Background = () => {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div className={styles.background}>
      <div className={cn(styles.ellipse, styles.bg_1)}></div>
      <div className={cn(styles.ellipse, styles.bg_1)}></div>
      <div className={cn(styles.ellipse, styles.bg_2)}></div>
      <div className={cn(styles.ellipse, styles.bg_2)}></div>
    </div>
  );
};

export default Background;
