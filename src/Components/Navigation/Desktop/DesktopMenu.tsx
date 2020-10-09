import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./DesktopMenu.css";
import NavigationRoutes from '../NavigationRoutes'

const DesktopMenu: React.FC<any> = (props) => {
  return <div className="DesktopMenu">
    <NavigationRoutes {...props} />
  </div>;
};

export default DesktopMenu;