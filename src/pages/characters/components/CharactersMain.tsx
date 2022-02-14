import React from "react";

import { observer } from "mobx-react-lite";
import CharacterDataTable from "./CharacterDataTable";
import useCharactersStore from "../useCharactersStore";
import CharacterDialog from "./CharacterDialog";
import { CharacterInfo } from "types/types";

const CharactersMain = observer(() => {
  const { open, setOpen, dialogCharacterInfo, setDialogCharacterInfo } =
    useCharactersStore();

  const openDialog = (info: CharacterInfo) => {
    setOpen(true);
    setDialogCharacterInfo(info);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <CharacterDataTable onClick={openDialog} />
      <CharacterDialog
        open={open}
        info={dialogCharacterInfo}
        onClose={closeDialog}
      />
    </div>
  );
});

export default CharactersMain;
