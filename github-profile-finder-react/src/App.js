import React, {useState} from 'react';
import './App.css';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import getUserAPI from './lib/api.js';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async (username) => {
    const data = await getUserAPI(username);
    setUser(data);
  };

  return (
    <>
      <SearchInput getUser={getUser} />
      <SearchResult user={user} />
    </>
  );
}

export default App;
