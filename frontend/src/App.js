import { useState } from "react";
import { useFilms } from "./hooks";
import { Container, Content, Title, Finder, FinderResults } from "./components";

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
    <Container>
      <Content>
        <Title>Star Wars Films</Title>
        <Finder
          placeholder="Search films"
          onSearch={handleSubmit}
          onChange={handleChange}
        />
        <FinderResults items={films} />
      </Content>
    </Container>
  );
}

export default App;
