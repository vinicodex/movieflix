import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./favorites.css";
import { Link } from "react-router-dom";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movieflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    toast.success("Movie removed from your list.");
    let movieFilter = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(movieFilter);
    localStorage.setItem("@movieflix", JSON.stringify(movieFilter));
  }

  return (
    <div className="favorites">
      <h1>My movies</h1>
      {movies.length === 0 && <span>You don't have any favorite movie ;/</span>}
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <Link to={`/movies/${item.id}`}>Access</Link>
              <button onClick={() => deleteMovie(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
