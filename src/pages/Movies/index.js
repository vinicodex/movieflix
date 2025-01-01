import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./detail.css";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovieDetail() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "72a78906cf582e79769e75a46841ab2e",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: "true" });
          return;
        });
    }
    loadMovieDetail();

    return () => {
      console.log("Unmont component");
    };
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="movie-info">
        <h2>Loading Movie...</h2>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Overview</h3>
      <span>{movie.overview}</span>
      <strong>Rate: {movie.vote_average} / 10</strong>

      <div className="button-area">
        <button>Save</button>
        <button>
          <Link
            to={`https://youtube.com/results?search_query=${movie.title} Trailer`}
          >
            Trailer
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Movie;
