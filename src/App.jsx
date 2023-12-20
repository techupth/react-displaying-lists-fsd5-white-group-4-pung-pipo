import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MovieList from "./component/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1
          css={css`
            text-align: center;
            margin-bottom: 30px;
            margin-top: 20px;
          `}
        >
          Movie List Section
        </h1>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
