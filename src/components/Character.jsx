import "../assets/styles/character.css";

const Character = ({ character }) => {
  return (
    <div className="Character">
      <div className="character-item">
        <div className="character-container">
          {character.thumbnail && (
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="character-image"
            />
          )}
          <div className="character-details">
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
