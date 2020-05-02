import React from "react";
import styles from "./header.css";
import { Navigation } from "../navigation";
import { UserPanel } from "../user-panel";

export const Header = React.memo(() => {
  return (
    <header className={styles.header}>
      <a href="#">Logo</a>
      <Navigation />
      <UserPanel />
    </header>
  );
});
