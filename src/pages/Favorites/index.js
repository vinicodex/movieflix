import { useEffect, useState } from "react";
import "./favorites.css";
import { Link } from "react-router-dom";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movieflix");
    setMovies(JSON.parse(myList) || []);
    console.log(myList);
  }, []);

  return (
    <div>
      <h1>Favorite movies</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <Link to={`/movies/${item.id}`}>Access</Link>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
