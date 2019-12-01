import React from 'react'; 
import './App.css';
import Main from './Components/Main'
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Route } from 'react-router-dom';








function App() {
  return (
    <div className="App">
      <Route path='/Main' component={Main}/>
      <Route path='/Home' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Skills' component={Skills}/>
      <Route path='/Projects' component={Projects}/>
      <Route path='/Contact' component={Contact}/>
    </div>
  );
}

export default App;
