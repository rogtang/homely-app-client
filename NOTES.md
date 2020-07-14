COMPONENTS:
App
Navbar
LandingPage: home page with info on the app and login/registration links
LoginPage
RegistrationPage
Dashboard: the main screen containing the list of posts and some basic info (name, address, ratings)
LocationItem: individual posts with info and controls to manage the post
AddPost: the form to add new posts
EditPost: the form to edit posts
Rating: Displays the ratings for each post

MOVE ALL CSS INTO APP.CSS?

const newHouse = [
{
name: 'the White House',
address: '1600 Pennslyvania Ave, Washington DC, 20500',
userNotes: 'Lovely exteriors, spatial front yard, but kitchens need
renovation. Plenty of natural light. Spacious living areas but
air conditioning will need to be replaced. Cabinets are
outdated. Furniture will not be included.',
url: 'https://zillow.com/homes',
ratings: {
price: 1,
size: 5,
location: 3
}
}
]

//conditionally render screens
render() {
const page = this.state.showAddPost
? <AddPost />
: <Dashboard posts={this.state.posts}/>;

    return (
      <div className="App">
        { page }
      </div>
    );

}

//Taken from noteful, notelistmain component. Try this to get posts for specific user then set state with getPostsFromUsers
const getPostsFromUsers = (posts=[], user_id) => (
(!user_id)
? posts
: posts.filter(post => post.user_id.toString() === user_id.toString())

const postsFromUsers = getPostsFromUsers(posts, user_id)
then postFromUsers.map

//Maybe create a Posts component that is rendered directly in Dashboard?

render() {
return (
<Posts />
)
}

  <div>
        <main role="main">
      <header className="dashboard-header">
        <h1>Homely Posts</h1>
      </header>
      <section>
        <div>
            <h2><Link to='/posts/1'>{newHouse.name}</Link></h2>
            <div>{newHouse.address}</div>
            <div>Price: <Rating value={newHouse.ratings.price}/></div>
            <div>Size: <Rating value={newHouse.ratings.size}/></div>
            <div>Location: <Rating value={newHouse.ratings.location}/></div>
        </div>
        <br/>
        <button>Edit</button>
        <button>Delete</button>
      </section>
      <section>
        <div>
            <h2>The Palace in Auburn Hills</h2>
            <div>6 Championship Dr, Auburn Hills, MI 48326</div>
        </div>
      </section>
      <section>
        <div>
            <h2>White Picket Fence</h2>
            <div>111 American Dream Lane, South Pasadena, CA 91030</div>
        </div>
      </section>
    </main>
        <footer>(c) 2020</footer>
      </div>
