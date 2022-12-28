import React, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Searchbar from "./components/SearchBar";

const BASE_URL = "https://swapi.dev/api/people/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // 1.useState for the array of data called from the api
  // 2.useEffect for the api call
  // 3.useState for Searchbar input
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res.data);
        return setCharacters(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filteredCharacters = () => {
    const termNormalized = searchValue.trim().toLowerCase();
    if (!termNormalized) return characters;
    return characters.filter((character) =>
      character.name.toLowerCase().includes(termNormalized)
    );
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Searchbar setsearchValue={setSearchValue} />
      <Characters characters={filteredCharacters()} />
    </div>
  );
};

export default App;
