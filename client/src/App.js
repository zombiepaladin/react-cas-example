import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState(undefined);

  // This useEffet fetches the current user from the API server.
  // If there is no user yet, then we load the login page from 
  // the API server by directly setting the url in the browser.
  useEffect(() => {
    fetch('/api/whoami')
    .then(response => response.json())
    .then(user => setUser(user))
    .catch(err => window.location = "/api/login")
  }, []);

  // Display a wait message or spinner if the user is 
  // not yet logged in.
  if(!user) return <h1>Please wait...</h1>

  // If the user is logged in, go ahead and render the app.
  // Note you may want to pass the user as props to children
  // components.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome {user.username}! You are authenticated :)</p>
        <a href="/api/logout">Logout</a>
      </header>
    </div>
  );
}

export default App;
