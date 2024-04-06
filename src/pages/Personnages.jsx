import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Personnages = ({ search, setSearch }) => {
  const [personnagesData, setPersonnagesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchPersonnagesData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/Characters?name=${search}`
        );
        console.log(data);
        setPersonnagesData(data.personnagesData.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPersonnagesData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <div className="main-div">
        <h1>Liste des personnages</h1>

        {personnagesData.results.map((personnage) => {
          // console.log(
          //   `${character.thumbmail?.path}/standard_xlarge.${character.thumbmail?.extension}`
          // );

          return (
            <article key={personnage._id}>
              <Link to={`/Comics/${Comics.name}`} key={index}>
                <h2>{personnage.name}</h2>
                <img
                  src={`${personnage.thumbnail?.path}/standard_xlarge.${personnage.thumbnail?.extension}`}
                  alt="img-character"
                />
                <p>{personnage.description}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Personnages;
