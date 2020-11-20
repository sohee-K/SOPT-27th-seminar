import React, {useState} from 'react';
import './App.scss';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import getUserAPI from './lib/api.js';

function App() {
  const [userState, setUserState] = useState({
    status: "idle",
    user: null,
  });

  const getUser = async (username) => {
    setUserState({ status: "pending", user: null });

    try {
      const data = await getUserAPI(username);
      setUserState({ status: "resolved", user: data });
    }
    catch(e) {
      setUserState({ status:"rejected", user: null });
      console.error(e);
    }
  };

  return (
    <div className="search-wrapper">
      <SearchInput getUser={getUser} />
      <SearchResult userState={userState} />
    </div>
  );
}

export default App;
