import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js'
import axios from 'axios';

const client = axios.create({
  baseURL: "https://api.github.com/users/"
});

function App() {
  const [user, setUser] = React.useState(null);

  const getUserAPI = async (username) => {
    const data = await client.get(username);
    setUser(data.data);
  };

  React.useEffect( () => {
    getUserAPI("Sohee-K")
  }, []);

  return (
    <>
      <SearchInput />
      <SearchResult />
    </>
  );
}

export default App;
