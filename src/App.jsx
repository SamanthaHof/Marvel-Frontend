import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";

// Import Pages
import Personnages from "./pages/Personnages.jsx";
import Comics from "./pages/Comics.jsx";
import home from "./pages/home.jsx";
import personnage from "./pages/personnage.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Personnages />} />
              <Route path="/Comics" element={<Comics />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
