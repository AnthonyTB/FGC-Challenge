import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import {DesktopMenu, MobileMenu} from '../';
import './Navigation.css';


const Navigation: React.FC<RouteComponentProps> = (props) => {

const Routes = [{Heading: 'Beagle', Route: '/Beagle'},
{Heading: 'Boxer', Route: '/Boxer'},
{Heading: 'Great Dane', Route: '/Great-Dane'},
{Heading: 'Doberman', Route: '/Doberman'},
{Heading: 'Malinois', Route: '/Malinois'},
{Heading: 'Pitbull', Route: '/Pitbull'},
]

  return <nav className="Navigation">
    <MobileMenu {...props} Routes={Routes} />
    <DesktopMenu {...props} Routes={Routes} />
  </nav>;
};

export default Navigation;