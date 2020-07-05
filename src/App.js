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
import PrivateRoute from './utils/PrivateRoute'
import PublicOnlyRoute from './utils/PublicOnlyRoute'

const newHouse = 
  {
      name: "the White House",
      address: "1600 Pennslyvania Ave, Washington DC, 20500",
      userNotes: "Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.",
      url: "https://zillow.com/homes",
      ratings: {
          price: 1,
          size: 5,
          location: 4
      }
      }

  const anotherHouse = 
  {
      name: "the White House",
      address: "1600 Pennslyvania Ave, Washington DC, 20500",
      userNotes: "Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.",
      url: "https://zillow.com/homes",
      price_rating: 1,
      size_rating: 5,
      location_rating: 4
      }


class App extends React.Component {
    render() {
        return (
          <div className="App">
            <Navbar />
          <main className="App_main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/login'} component={LoginPage} />
            <Route
              exact path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact path={'/posts'}
              render={(props) => <Dashboard {...props} newHouse={newHouse}/>}
            />
            <Route
              exact path={'/posts/1'}
              render={(props) => <LocationItem {...props} newHouse={newHouse}/>}
            />
            
            <Route
              path={'/addpost'}
              component={AddPost}
            />
            <Route
              exact path={'/edit/1'}
              render={(props) => <EditPost {...props} newHouse={newHouse}/>}
            />
          </Switch>
          </main>
          </div>
        );
    }
}

export default App;
