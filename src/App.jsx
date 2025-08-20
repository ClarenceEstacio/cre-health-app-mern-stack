import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Createhealt from "./components/create-health.jsx";
import Edithealt from "./components/edit-healt.jsx";
import Healthlist from "./components/health-list.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Healthlist />} />
          <Route path="/edit/:id" element={<Edithealt />} />
          <Route path="/create" element={<Createhealt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
