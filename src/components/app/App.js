import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import About from "../about/About";
import ProjectList from "../projectlist/ProjectList";
import ProjectDetail from "../projectdetail/ProjectDetail";
import NewProject from "../newproject/NewProject";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <ProjectList />
        </Route>
        <Route exact path="/projects/new">
          <NewProject />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route>

        <Route path="*">
          <h2>404 Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
