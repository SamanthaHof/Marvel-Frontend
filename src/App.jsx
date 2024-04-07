import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Import Components
import NavBar from "./components/NavBar";

// Import Pages
import Home from "./pages/Home.jsx";
import Characters from "./pages/Characters.jsx";
import Comics from "./pages/Comics.jsx";
import Favoris from "./pages/Fovori.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [favoris, setFavoris] = useState([]); // Déclaration de l'état pour stocker les favoris

  // Fonction pour ajouter un personnage aux favoris
  const addToFavoris = (character) => {
    setFavoris([...favoris, character]);
  };

  return (
    <Router>
      <NavBar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personnages"
          element={
            <Characters
              search={search}
              setSearch={setSearch}
              addToFavoris={addToFavoris}
            />
          } // Passage de la fonction addToFavoris en tant que prop
        />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris favoris={favoris} />} />{" "}
        {/* Ajout de la route pour la page Favoris */}
      </Routes>
    </Router>
  );
}

export default App;
