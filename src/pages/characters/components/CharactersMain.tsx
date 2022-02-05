import React from "react";

import { observer } from "mobx-react-lite";
import { charactersStore } from "../useCharactersStore";

const CharactersMain = observer(() => {
  const { starValues } = charactersStore;

  return (
    <div>
      {starValues.map((value) => (
        <div key={value}>{value}</div>
      ))}
    </div>
  );
});

export default CharactersMain;
