import React, { useState } from "react";
import "./MobileMenu.css";
import NavigationRoutes from '../NavigationRoutes';

const MobileMenu: React.FC<any> = (props) => {
  // used to toggle mobile menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <div className={`MobileMenu ${isOpen ? 'open animate__animated animate__slideInDown' : 'closed'}`}>
    {isOpen ? <NavigationRoutes isMobile={true} {...props} setIsOpen={() => setIsOpen(!isOpen)} /> : null}
    <button type='button' onClick={() => setIsOpen(!isOpen)}>
      <i className={`${isOpen ? "fas fa-caret-up" : "fas fa-caret-down"}`}></i>
    </button>
  </div>;
};

export default MobileMenu;
