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
            <Route exact path='/' component={ Navbar } />
          <main className="App_main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            {/*create util for Public and Private Routes and import them */}
            <Route path={'/login'} component={LoginPage} />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/posts'}
              component={Dashboard}
            />
            <Route
              path={'/posts/:postId'}
              component={LocationItem}
            />
            <Route
              path={'/addpost'}
              component={AddPost}
            />
            <Route
              path={'/edit/:postId'}
              component={EditPost}
            />
          </Switch>
          </main>
          </div>
        );
    }
}

export default App;
