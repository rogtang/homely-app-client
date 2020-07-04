import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import RegistrationPage from './components/RegistrationPage';
import LocationItem from './components/LocationItem';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';


class App extends React.Component {
    render() {
        return (
          <div className="App">
            <Navbar />
          <main className="App_main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            {/*create util for Public and Private Routes and import them */}
            <Route exact path={'/login'} component={LoginPage} />
            <Route
              exact path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact path={'/posts'}
              component={Dashboard}
            />
            <Route
              exact path={'/posts/1'}
              component={LocationItem}
            />
            <Route
              path={'/addpost'}
              component={AddPost}
            />
            <Route
              exact path={'/edit/1'}
              component={EditPost}
            />
          </Switch>
          </main>
          </div>
        );
    }
}

export default App;
