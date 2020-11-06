import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import getUserAPI from './lib/api.js';

function App() {
  const [user, setUser] = React.useState(null);

  const getUser = async (username) => {
    const data = await getUserAPI(username);
    setUser(data);
  };

  React.useEffect( () => {
    getUser("Sohee-K")
  }, []);

  return (
    <>
      <SearchInput />
      <SearchResult user={user} />
    </>
  );
}

export default App;
