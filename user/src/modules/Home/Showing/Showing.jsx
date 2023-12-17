import { useState, useEffect } from "react";
import ShowingRow from "./ShowingRow";
import movieAPI from "../../../services/movieAPI";

const Showing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <ShowingRow movie={movies} title="Movies Available" />
      <ShowingRow movie={movies} title="Movies Trending" />
      <ShowingRow movie={movies} title="Movies Action" />
    </div>
  );
};

export default Showing;
