import React from "react";

import { observer } from "mobx-react-lite";
import CharacterDataTable from "./CharaterDataTable";
import useCharactersStore from "../useCharactersStore";

const CharactersMain = observer(() => {
  const { query } = useCharactersStore();

  return (
    <div>
      {query} <CharacterDataTable />
    </div>
  );
});

export default CharactersMain;
