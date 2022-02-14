import React, { useState } from "react";
import CharactersHeader from "./components/CharactersHeader";
import CharactersMain from "./components/CharactersMain";
import "./Characters.css";
import { CharactersStore, CharactersStoreContext } from "./useCharactersStore";

const CharactersPage = () => {
  const [charactersStore] = useState(new CharactersStore());

  return (
    <CharactersStoreContext.Provider value={charactersStore}>
      <div className="container">
        <CharactersHeader />
        <CharactersMain />
      </div>
    </CharactersStoreContext.Provider>
  );
};

export default CharactersPage;
