import { searchFilms } from "./services";
import { useState } from "react";

export const useFilms = () => {
  const [films, setFilms] = useState([]);

  const findFilms = async (query) => {
    const films = await searchFilms(query);
    setFilms(films);
  };

  return [films, findFilms];
};
