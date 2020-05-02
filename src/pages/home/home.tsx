import * as React from "react";
import { observer } from "mobx-react";
import styles from "./home.css";
import { plans } from "../../store";
import SportImg from "../../assets/sport1.jpeg";

export const Home = React.memo(
  observer(() => {
    return (
      <main>
        <p>{plans[0].length}</p>
        <img src={SportImg} className={styles.image}/>
      </main>
    );
  })
);
