import React from "react";
import CharactersHeader from "./components/CharactersHeader";
import CharactersMain from "./components/CharactersMain";
import "./Characters.css";

const CharactersPage = () => {
  return (
    <div className="container">
      <CharactersHeader />
      <CharactersMain />
    </div>
  );
};

export default CharactersPage;
