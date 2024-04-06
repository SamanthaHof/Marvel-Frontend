import Personnages from "./Personnages";
import Comics from "./Comics";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="centre">
          <Personnages />

          <div className="centre">
            <COmics />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
