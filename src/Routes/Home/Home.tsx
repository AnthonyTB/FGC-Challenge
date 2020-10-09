import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = () => {
  return <div className="Home">
    <h1>How To Use</h1>
    <p>Select one of the menu options and it will take you to that route and display 3 images of that breed.</p>
  </div>;
};

export default Home;