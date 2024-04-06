import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Personnage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/Characters/${id}`
        );
        // console.log(data.data);
        setData(data.data);
      } catch (error) {
        //console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="centre">
            {data.comics.map((elem) => {
              console.log(elem);
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Personnage;
