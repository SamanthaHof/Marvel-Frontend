import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Comics = () => {
  const [comicsData, setComicsData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/comics`);
        //console.log(data);
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  });
  return loading ? (
    <div>Chargement</div>
  ) : (
    <main>
      <div className="Comics">
        <div className="link-card">
          <div>{name}</div>
          <img src={data.apiKey.front_default} alt="comic img" />
        </div>
        <div className="type-flex">
          {data.types.map((typesTab, index) => {
            return (
              <Link
                key={index}
                className="type-box"
                to={`/type/${typesTab.type.name}`}
              >
                {typesTab.type.name}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Comics;
