import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences";
import Movie from "./components/Projects/Movie";
import Onestop from "./components/Projects/Onestop";
import PetAdopt from "./components/Projects/PetAdopt";
import Projects from "./components/Projects/Projects";
import Tournament from "./components/Projects/Tournament";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/petadopt" element={<PetAdopt />} />
          <Route path="/projects/moviebooking" element={<Movie />} />
          <Route path="/projects/tournament" element={<Tournament />} />
          <Route path="/projects/onestop" element={<Onestop />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
