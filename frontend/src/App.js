import { useState } from "react";
import { useFilms } from "./hooks";

const episodes = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
};

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
    <div className="container mx-auto">
      <div className="min-h-screen flex flex-col items-center justify-center px-10">
        <h1 className="text-3xl mb-5 text-gray-100">Star Wars Films</h1>
        <form
          className="inline-flex w-full xl:w-1/2"
          data-test="finder"
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 px-5 w-full outline-none rounded-l bg-gray-100"
            type="text"
            placeholder="Search films"
            data-test="finder-input"
            required
            onChange={handleChange}
          />
          <button className="bg-red-600 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded-r">
            Go!
          </button>
        </form>

        {films.length > 0 && (
          <div className="w-full my-16" data-test="films">
            {films.map((film, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 flex px-6 py-4 rounded my-5"
                >
                  <div className="bg-purple-500 rounded-full text-gray-100 font-semibold flex items-center justify-center h-14 w-14 mr-5">
                    {episodes[film.episode_id]}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {film.title}
                      <span className="text-base ml-1 font-normal">
                        ({new Date(film.release_date).getFullYear()})
                      </span>
                    </h2>
                    <h3>
                      <span className="font-semibold">Director:</span>{" "}
                      {film.director}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
