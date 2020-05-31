import * as React from "react";
import { observer } from "mobx-react";
import styles from "./home.css";
import SportImg from "../../assets/sport1.jpeg";
import { Button } from "../../common";

export const Home = React.memo(
  observer(() => {
    return (
      <main>
        <img src={SportImg} className={styles.image} />
        <Button
          text="Create plan"
          clickHandler={() => {
            console.log('click');
          }}
          styles={styles.button}
        />
      </main>
    );
  })
);
