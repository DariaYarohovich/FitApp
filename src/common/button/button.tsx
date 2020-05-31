import React from "react";
import { animated, useSpring } from "react-spring";
import styles from "./button.css";

type ButtonProps = {
  text: string;
  clickHandler: () => void;
  styles?: string;
};

export const Button = React.memo<ButtonProps>((props) => {
  const animatedProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.button
      style={animatedProps}
      className={[styles.button, props.styles].join(" ")}
      onClick={props.clickHandler}
    >
      {props.text}
    </animated.button>
  );
});
