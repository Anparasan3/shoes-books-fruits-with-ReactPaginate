import './App.css';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Search from './Components/Search.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/search' component={Search}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
