import React from "react";
import { Link } from "react-router-dom";

interface INavigationRoute {
  Heading: string;
  Route: string;
}

const NavigationRoutes: React.FC<any> = (props) => {
  return <ul className="NavigationRoutes">
    {props.Routes.map((Route: INavigationRoute, Idx: number) => {
      if (
        Route.Route.toLowerCase() ===
        props.location.pathname.toLowerCase()
      ) {
        return <li key={`${props.isMobile ? 'Mobile' : 'Desktop'} Navigation Route Home`}>
          <Link onClick={props.setIsOpen} to={'/'}>Home</Link>
        </li>
      } else {
        return (<li key={`${props.isMobile ? 'Mobile' : 'Desktop'} Navigation Route ${Idx}`}>
          <Link onClick={props.setIsOpen} to={Route.Route}>{Route.Heading}</Link>
        </li>)
      }
    })}
  </ul>;
};

export default NavigationRoutes;