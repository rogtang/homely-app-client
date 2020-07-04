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