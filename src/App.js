import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/navbar/navbar.js'

class App extends React.Component {
    render() {
        return (
            <h1>App
          <Switch>
            <Route exact path='/' component={ Navbar } />
          </Switch>
            </h1>
        );
    }
}

export default App;
