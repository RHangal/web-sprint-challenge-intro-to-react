// Write your Character component here
// Write your Character component here
import React, { useState } from "react";
import AttributeList from "./AttributeList";
import styled from "styled-components";

const CharacterDiv = styled.div`
  margin: 1rem;
  padding: 2rem 4rem;
  width: 40%;
  border-radius: 2rem;
  border: 1rem solid ${(pr) => pr.theme.primary};
  color: ${(pr) => pr.theme.textColor};
  background-color: ${(pr) => pr.theme.secondary};
`;

const H2 = styled.h2`
  font-size: 3rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: ${(pr) => (pr.toggle ? "" : "none")};
`;

const Arrow = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: white;
  font-size: 1rem;

  :active {
    transform: translateY(4px);
  }
`;

export default function Character(props) {
  const [toggleValue, setToggleValue] = useState(false);

  const { character } = props;
  const liVis = () => {
    setToggleValue(toggleValue === false ? true : false);
  };

  return (
    <CharacterDiv key={character.created}>
      <div className="characterData--container">
        <H2>{character.name}</H2>
        <div className="characterSubData--container">
          <h3>
            Attributes<Arrow onClick={liVis}> &#x25BC; </Arrow>
          </h3>
          <Ul toggle={toggleValue}>
            <AttributeList character={character} />
          </Ul>
        </div>
      </div>
    </CharacterDiv>
  );
}
