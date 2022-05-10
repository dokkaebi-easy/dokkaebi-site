import Guide from "./components/guide/guide";
import Home from "./components/home";
import Beforeinstall from "./components/guide/beforeinstall";
import Create from "./components/guide/create";
import Distribute from "./components/guide/distribute";
import Dockerinstall from "./components/guide/dockerinstall";
import Install from "./components/guide/install";
import Login from "./components/guide/login";
import Version from "./components/guide/version";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/beforeinstall" element={<Beforeinstall />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/distribute" element={<Distribute />} />
          <Route path="/dockerinstall" element={<Dockerinstall />} />
          <Route path="/install" element={<Install />} />
          <Route path="/login" element={<Login />} />
          <Route path="/version" element={<Version />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
