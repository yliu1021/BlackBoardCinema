import { useState } from "react";
import { getMovies } from "./movies";

function MainScreen(props) {
  const [movies, setMovies] = useState(null);

  getMovies().then(setMovies);

  let moviesView;
  if (movies) {
    moviesView = movies.map(movie => {
      return <li key={movie.id}>
        <p>{movie.title}</p>
      </li>;
    });
  } else {
    moviesView = <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome {props.name}</h1>
      {moviesView}
    </div>
  );
}

export default MainScreen;
