import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import DashboardPat from './Dashboard-pat/Dashboardpat'
import './App.css';
import PatientDetails from './Patient/PaatientDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard-doc">
            <Dashboard />
          </Route>
          <Route path="/dashboard-pat">
            <DashboardPat />
          </Route>
          <Route path="/view-pat">
            <PatientDetails />
          </Route>
          <Route exact path="/logout">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
