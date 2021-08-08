import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTranding } from "../../services/fetchAPI";
import "./HomePage.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();

  useEffect(() => {
    fetchTranding()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul className="title">
          {movies.map(({ poster_path, title, id }) => (
            <li key={id}>
              <Link
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
              >
                <img
                  className="images"
                  src={`${imgUrl}${poster_path}`}
                  alt={`${title}`}
                />
                {id.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
