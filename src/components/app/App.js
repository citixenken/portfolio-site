import React, { useState } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import About from "../about/About";
import ProjectList from "../projectlist/ProjectList";

function App() {
  const [page, setPage] = useState("/");

  function getCurrentPage() {
    switch (page) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/projects":
        return <ProjectList />;
      default:
        return <h1>404 Not Found</h1>;
    }
  }
  return (
    <div>
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
    </div>
  );
}

export default App;
