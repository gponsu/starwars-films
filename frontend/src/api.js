const STAR_WARS_API_URL = "https://swapi.dev/api";

const request = async (endpoint, options = {}) => {
  const { search } = options;
  let url = STAR_WARS_API_URL + endpoint;

  if (search) {
    url += `/?search=${search}`;
  }

  const response = await fetch(url);
  const json_response = await response.json();

  return json_response;
};

const api = {
  getFilms: async (options) => {
    const response = await request("/films", options);

    return response;
  },
};

export default api;
