export default {
    //API_ENDPOINT: 'https://homely-server.herokuapp.com/api',
    API_ENDPOINT: window.location.hostname === "localhost"? 'http://localhost:8000/api' :'https://homely-server.herokuapp.com/api',
    //API_ENDPOINT: 'http://localhost:8000/api',
    TOKEN_KEY: 'homely-client-auth-token',
  }