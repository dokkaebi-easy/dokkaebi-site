import Guide from "./components/guide/guide";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
