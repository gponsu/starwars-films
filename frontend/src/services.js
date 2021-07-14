import api from "./api";

const searchFilms = async (query) => {
    const films = await api.getFilms({ search: query });

    return films.results;
};

export { searchFilms };