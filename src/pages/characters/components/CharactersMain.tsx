import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import useCharactersStore from "../useCharactersStore";

import CharacterDataTable from "./CharacterDataTable";
import CharacterDialog from "./CharacterDialog";
import { CharacterInfo } from "types/types";

const CharactersMain = observer(() => {
  const {
    open,
    setOpen,
    dialogCharacterInfo,
    setDialogCharacterInfo,
    fetchCharacterData,
  } = useCharactersStore();

  const openDialog = (info: CharacterInfo) => {
    setOpen(true);
    setDialogCharacterInfo(info);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  return (
    <>
      <CharacterDataTable onClick={openDialog} />
      <CharacterDialog
        open={open}
        info={dialogCharacterInfo}
        onClose={closeDialog}
      />
    </>
  );
});

export default CharactersMain;
