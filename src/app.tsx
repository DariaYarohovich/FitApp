import React from "react";
import { Home } from "./pages";
import { Header } from "./common";
import './public/styles.css';

export const Router = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export const App = <Router />;
