import React from "react";
import styles from "./user-panel.css";

export const UserPanel = React.memo(() => {
  return <div className={styles.userPanel}>User Panel</div>;
});
