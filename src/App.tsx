import React, { FunctionComponent } from "react";
import "./App.css";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import {Home, Dog, ErrorBoundary} from './Routes';
import {DesktopMenu, MobileMenu} from './Components/Navigation'

const App: FunctionComponent<RouteComponentProps> = () => {
  return <div className="App">
    <DesktopMenu />
    <MobileMenu />
    <Switch>
<Route exact path='/' render={(routeProps: RouteComponentProps) => <Home {...routeProps} />} />
<Route path='/:DogBreed' render={(routeProps: RouteComponentProps) => <Dog {...routeProps} />} />
<ErrorBoundary />
    </Switch>
  </div>;
};

export default App;
