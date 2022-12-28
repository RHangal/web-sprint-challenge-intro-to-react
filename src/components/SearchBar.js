import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 0.5rem solid ${(pr) => pr.theme.secondary};
  border-radius: 1rem;
  height: 3rem;
  width: 50%;
  font-size: 2.5rem;
  text-align: center;
`;

export default function Searchbar(props) {
  const { setSearchValue } = props;

  const changeHandler = (event) => {
    return setSearchValue(event.target.value);
  };

  return (
    <div className="searchbar--container">
      <form className="search--form">
        <Input type="text" placeholder="Search" onChange={changeHandler} />
      </form>
    </div>
  );
}
