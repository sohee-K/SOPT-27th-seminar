import React, {useState} from 'react';
import './App.scss';
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
    <div className="search-wrapper">
      <SearchInput getUser={getUser} />
      <SearchResult user={user} />
    </div>
  );
}

export default App;
