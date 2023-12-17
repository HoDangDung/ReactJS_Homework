import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();

  return <div>Movie</div>;
};

export default Movie;
