import React, { useState, useEffect } from "react";
import axios from "axios";
import Comic from "../components/Comic";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import "../assets/styles/comics.css";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        let url = `http://localhost:3000/comics?page=${currentPage}`;
        if (searchTerm) {
          url += `&search=${searchTerm}`;
        }

        const response = await axios.get(url);
        setComics(response.data.results);
        setTotalPages(Math.ceil(response.data.count / response.data.limit));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comics:", error);
        setIsLoading(false);
      }
    };
    fetchComicsData();
  }, [currentPage, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Comics">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div>Chargement...</div>
      ) : (
        <>
          <div className="comic-list">
            {comics.map((comic) => (
              <Comic key={comic.id} comic={comic} />
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

export default Comics;
