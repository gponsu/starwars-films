import { useState } from "react";
import { useFilms } from "./hooks";

function App() {
  const [query, setQuery] = useState("");
  const [films, findFilms] = useFilms();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    findFilms(query);
  };

  return (
    <div className="App">
      <form data-test="finder" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search films" data-test="finder-input" onChange={handleChange} />
        <button>Go</button>
      </form>

      {films.length > 0 &&
        <ul data-test="films">
          {films.map((film, index) => (
            <li key={index}>{film.title}</li>
          ))
          }
        </ul>
      }
    </div>
  );
}

export default App;
