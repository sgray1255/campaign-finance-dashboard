import Home from "./containers/Home/Home";
import Header from "./containers/Header/Header/Header";
import SearchProvider from "./context/SearchContext";
import Legislators from "./containers/Legislators/Legislators";
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Legislator from "./containers/Legislator/Legislator";

function App() { 

  return (
    
      <Router>
        <SearchProvider>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/legislators/:id">
              <Legislator />
            </Route>
            <Route exact path="/legislators">
              <Legislators />
            </Route>
          </Switch>
        </SearchProvider>
      </Router>
    
  );
}

export default App;
