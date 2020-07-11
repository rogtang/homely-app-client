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
import PostApiService from './services/post-api-service';
import PrivateRoute from './utils/PrivateRoute';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import PostsContext from './contexts/PostsContext';

/*const newHouse = 
  {
      name: "the White House",
      address: "1600 Pennslyvania Ave, Washington DC, 20500",
      usernotes: "Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.",
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
      usernotes: "Lovely exteriors, spatial front yard, but kitchens need renovation. Plenty of natural light. Spacious living areas but air conditioning will need to be replaced. Cabinets are outdated. Furniture will not be included.",
      url: "https://zillow.com/homes",
      price_rating: 1,
      size_rating: 5,
      location_rating: 4
      }
*/

export const getPostsFromUsers = (posts=[], user_id) => (
        (!user_id)
          ? posts
          : posts.filter(post => post.user_id.toString() === user_id.toString())
)

class App extends React.Component {
  state = {
    posts: [],
    users: [],
    error: null,
  };

  
  setPosts = posts => {
    const postsFromUser = getPostsFromUsers(posts, this.state.posts.user_id)
    this.setState({
      posts: postsFromUser,
      error: null,
    })
  }

  addPost = post => {
    this.setState({
      posts: [...this.state.posts, post],
  })
  }

componentDidMount() {
    PostApiService.getPosts()
        .then(this.setPosts)
        .catch(error => this.setState({ error }))
}

  updatePost = updatedPost => {
    const newPost = this.state.posts.map(post => 
      (post.id === updatedPost.id) ? updatedPost: post )
    this.setState({
      posts: newPost
    })
  }

  deletePost = postId => {
    const newPosts = this.state.posts.filter(post =>
      post.id !== postId
    )
    this.setState({
      posts: newPosts
    })
  }

    render() {
      const value = {
        posts: this.state.posts,
        addPost: this.addPost,
        deletePost: this.deletePost,
        addUser: this.addUser,
        updatePost: this.updatePost
      }

      console.log(value)

        return (
          <PostsContext.Provider value={value}>
          <div className="App">
            <div className="app-nav">
            <Navbar />
            </div>
          <main className="App_main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute exact path={'/login'} component={LoginPage} />
            <PublicOnlyRoute
              exact path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              exact path={'/posts'}
              component={Dashboard}
            />
            <PrivateRoute
              exact path={'/posts/:post_id'}
              component={LocationItem}
            />
            
            <PrivateRoute
              path={'/addpost'}
              component={AddPost}
            />
            <PrivateRoute
              exact path={'/edit/:post_id'}
              component={EditPost}
            />
          </Switch>
          </main>
          <footer>(c)2020</footer>
          </div>
          </PostsContext.Provider>
        );
    }
}

export default App;
