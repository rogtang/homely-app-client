import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import RegistrationPage from "./components/RegistrationPage";
import LocationDetail from "./components/LocationDetail";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostApiService from "./services/post-api-service";
import PrivateRoute from "./utils/PrivateRoute";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";
import PostsContext from "./contexts/PostsContext";
import Footer from "./components/Footer";

export const findPost = (posts = [], post_id) =>
  posts.find((post) => post.id === post_id);

class App extends React.Component {
  state = {
    posts: [],
    users: [],
    error: null,
  };

  setPosts = (posts) => {
    this.setState({
      posts,
      error: null,
    });
  };

  addPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post],
    });
  };

  updatePost = (updatedPost) => {
    const newPost = this.state.posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    this.setState({
      posts: newPost,
    });
  };

  deletePost = postId => {
    const newPosts = this.state.posts.filter(post =>
      post.id !== postId
    )
    this.setState({
      posts: newPosts
    })
  }

  componentDidMount() {
    PostApiService.getPosts()
      .then(this.setPosts)
      .catch((error) => this.setState({ error }));
  }

  render() {
    const value = {
      posts: this.state.posts,
      addPost: this.addPost,
      deletePost: this.deletePost,
      updatePost: this.updatePost,
    };


    return (
      <PostsContext.Provider value={value}>
        <div className="App">
          <div className="app-nav">
            <Navbar />
          </div>
          <main className="App_main">
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <PublicOnlyRoute exact path={"/login"} component={LoginPage} />
              <PublicOnlyRoute
                exact
                path={"/register"}
                component={RegistrationPage}
              />
              <PrivateRoute exact path={"/posts"} component={Dashboard}/>
              <PrivateRoute
                exact
                path={"/posts/:post_id"}
                component={LocationDetail}
              />

              <PrivateRoute path={"/addpost"} component={AddPost} />
              <PrivateRoute
                exact
                path={"/edit/:post_id"}
                component={EditPost}
              />
            </Switch>
          </main>
          <div className="app-footer">
            <Footer />
          </div>
        </div>
      </PostsContext.Provider>
    );
  }
}

export default App;
