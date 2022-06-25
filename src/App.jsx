import Home from "./components/home";
import Layout from "./Layout.jsx";
import Beforeinstall from "./components/guide/beforeinstall";
import Create from "./components/guide/create";
import Distribute from "./components/guide/distribute";
import Dockerinstall from "./components/guide/dockerinstall";
import Install from "./components/guide/install";
import Login from "./components/guide/login";
import Version from "./components/guide/version";
import Video from "./components/videos/video";
import Spring from "./components/videos/spring";
import Django from "./components/videos/django";
import React from "./components/videos/react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route element={<Layout />}>
            <Route path="/beforeinstall" element={<Beforeinstall />} />
            <Route path="/create" element={<Create />} />
            <Route path="/distribute" element={<Distribute />} />
            <Route path="/dockerinstall" element={<Dockerinstall />} />
            <Route path="/install" element={<Install />} />
            <Route path="/login" element={<Login />} />
            <Route path="/version" element={<Version />} />
            <Route path="/video" element={<Video />} />
            <Route path="/spring" element={<Spring />} />
            <Route path="/django" element={<Django />} />
            <Route path="/react" element={<React />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
