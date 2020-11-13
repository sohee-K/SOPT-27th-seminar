import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import Member from './pages/Member';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/member" component={Member} />
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;