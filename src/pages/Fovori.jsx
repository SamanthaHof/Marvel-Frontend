import React, { useState } from "react";

const Favoris = () => {
  const [favoris, setFavoris] = useState([]);

  // Fonction pour supprimer un personnage des favoris
  const removeFavorite = (id) => {
    setFavoris(favoris.filter((favId) => favId !== id));
  };

  return (
    <div>
      <h1>Favoris</h1>
      {favoris.length === 0 ? (
        <p>Aucun personnage favori pour le moment.</p>
      ) : (
        <ul>
          {favoris.map((id) => (
            <li key={id}>
              Personnage ID: {id}
              <button onClick={() => removeFavorite(id)}>
                Retirer des favoris
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favoris;
