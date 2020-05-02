import React from "react";
import { observer } from "mobx-react";
import { navigation } from "../../store";
import styles from "./navigation.css";

export const Navigation = React.memo(
  observer(() => {
    return (
      <nav>
        <ul className={styles.nav}>
          {navigation.map((navItem) => (
            <li key={navItem.title}>
              <a
                href={navItem.path}
                className={`${styles.navItem} ${
                  navItem.active && styles.navItemActive
                }`}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  })
);
