import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import AboutMe from './component/AboutMe/AboutMe/AboutMe';
import Resume from './component/Resume/Resume/Resume';
import MyService from './component/MyService/MyService/MyService';
import ContactMe from './component/ContactMe/ContactMe/ContactMe';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <AboutMe/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/service">
          <MyService/>
        </Route>
        <Route path="/contact">
          <ContactMe/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
