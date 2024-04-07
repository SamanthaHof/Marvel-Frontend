import "../assets/styles/comic.css";

const Comic = ({ comic }) => {
  return (
    <div className="Comic">
      <div className="comic-item">
        <div className="comic-container">
          {comic.thumbnail && (
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="comic-image"
            />
          )}
          <div className="comic-details">
            <h3>{comic.title}</h3>
            <p>{comic.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comic;
