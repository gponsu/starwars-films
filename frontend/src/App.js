import { useState } from "react";
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://swapi.dev/api/films/?search=${search}`)
      .then(response => response.json())
      .then(data => setFilms(data.results));
  }

  return (
    <div className="App">
      <form data-test="finder" onSubmit={handleSubmit}>
        <input type="text" placeholder="Find a film" data-test="finder-input" onChange={handleChange} />
        <button>Go</button>
      </form>

      {films.length > 0 &&
        <ul data-test="films">
          {films.map(film => (
            <li>{film.title}</li>
          ))
          }
        </ul>
      }
    </div>
  );
}

export default App;
