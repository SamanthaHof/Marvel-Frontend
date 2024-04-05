import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = ({ search }) => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/characters
        `);
        //console.log(data);
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <h1>Liste des personnages</h1>
      <div className="main-div">
        {charactersData.results.map((character) => {
          // console.log(
          //   `${character.thumbmail?.path}/standard_xlarge.${character.thumbmail?.extension}`
          // );

          return (
            <article key={character._id}>
              <Link to={`/Comics/${Comics.name}`} key={index}>
                <h2>{character.name}</h2>
                <img
                  src={`${character.thumbnail?.path}/standard_xlarge.${character.thumbnail?.extension}`}
                  alt="img-character"
                />
                <p>{character.description}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
