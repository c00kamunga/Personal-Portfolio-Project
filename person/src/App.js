import React from 'react'; 
import './App.css';
import Home from './Components/Home';
import { Route } from 'react-router-dom';








function App() {
  return (
    <div className="App">
      <Route exact path='/Home' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Skills' component={Skills}/>
      <Route path='/Projects' component={Projects}/>
      <Route path='/Contact' component={Contact}/>
    </div>
  );
}

export default App;
