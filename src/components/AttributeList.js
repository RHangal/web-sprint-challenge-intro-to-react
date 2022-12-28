import React from "react";
import styled from "styled-components";

const Li = styled.li`
  margin: 1%;
`;

export default function AttributeList(props) {
  const { character } = props;
  return (
    <>
      <Li>Birth Year: {character.birth_year}</Li>
      <Li>Height: {character.height}cm</Li>
      <Li>Mass: {character.mass}kgs</Li>
      {character.gender !== "n/a" && <Li>Gender: {character.gender}</Li>}
      {character.hair_color !== "n/a" && (
        <Li>Hair Color: {character.hair_color}</Li>
      )}
      <Li>Skin Color: {character.skin_color}</Li>
    </>
  );
}
