import React, { FunctionComponent } from "react";
import "./App.css";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import {Home, Dog, ErrorBoundary} from './Routes/';
import {Navigation} from './Components'

const App: FunctionComponent = () => {

  return <div className="App">
    <Route path="/" render={(routeProps: RouteComponentProps) => <Navigation {...routeProps} />} />
    <main>
    <Switch>
<Route exact path='/' render={(routeProps: RouteComponentProps) => <Home {...routeProps} />} />
<Route path='/:DogBreed' render={(routeProps: RouteComponentProps) => <Dog {...routeProps} />} />
<ErrorBoundary />
    </Switch>
    </main>
  </div>;
};

export default App;
