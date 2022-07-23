import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import About from "../about/About";
import ProjectList from "../projectlist/ProjectList";

function App() {
  const [page, setPage] = useState("/");

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <ProjectList />
        </Route>
        <Route path="*">
          <h2>404 Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
