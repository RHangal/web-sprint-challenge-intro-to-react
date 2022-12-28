import React from "react";
import Character from "./Character";
import styled from "styled-components";

const CharactersContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default function Characters(props) {
  const { characters, toggleValue, setToggleValue } = props;
  return (
    <section id="Characters">
      <CharactersContainer>
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </CharactersContainer>
    </section>
  );
}
