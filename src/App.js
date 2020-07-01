import React from 'react';
import './App.css';
import ListPage from "./components/ListPage";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <Router>
        <Route path={"/"}  exact component={ListPage} />
        <Route path={"/:id/details"} component={DetailsPage} />
    </Router>
  );
}

export default App;
