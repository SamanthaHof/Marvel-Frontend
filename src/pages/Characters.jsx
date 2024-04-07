import axios from "axios";
import { useEffect, useState } from "react";
import Character from "../components/Character";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import "../assets/styles/characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        let url = `http://localhost:3000/characters?page=${currentPage}`;
        if (searchTerm) {
          url += `&search=${searchTerm}`;
        }
        const response = await axios.get(url);
        setCharacters(response.data.results);
        setTotalPages(Math.ceil(response.data.count / response.data.limit));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setIsLoading(false);
      }
    };
    fetchCharactersData();
  }, [currentPage, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Characters">
      <SearchBar setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div>Chargement...</div>
      ) : (
        <>
          <div className="character-list">
            {characters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Characters;
