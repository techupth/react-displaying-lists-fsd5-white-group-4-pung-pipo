import "./App.css";
import MovieList from "./components/MovieList";
import MovieListSection from "./components/MovieListSection";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieListSection />
        <MovieList />
      </section>
    </div>
  );
}

export default App;
