import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { CharacterInfo } from "types/types";

export class CharactersStore {
  starValues: string[] = [];
  elementValues: string[] = [];
  flipTypeValues: string[] = [];
  genderValues: string[] = [];
  classValues: string[] = [];
  raceValues: string[] = [];
  gachaValues: string[] = [];
  serverValues: string[] = [];
  query: string = "";
  open: boolean = false;
  dialogCharacterInfo: CharacterInfo = {
    prefix: "misogi",
    element: "fire",
    rarity: "5",
    name: "미소기",
    flipType: "special",
    class: "debuffer",
    gender: "female",
    race: ["human"],
    weight: 400,
    rating: 2.25,
    board2: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setStarValues = (starValues: string[]) => {
    this.starValues = starValues;
  };

  setElementValues = (elementValues: string[]) => {
    this.elementValues = elementValues;
  };

  setFlipTypeValues = (flipTypeValues: string[]) => {
    this.flipTypeValues = flipTypeValues;
  };

  setGenderValues = (genderValues: string[]) => {
    this.genderValues = genderValues;
  };

  setClassValues = (classValues: string[]) => {
    this.classValues = classValues;
  };

  setRaceValues = (raceValues: string[]) => {
    this.raceValues = raceValues;
  };

  setGachaValues = (gachaValues: string[]) => {
    this.gachaValues = gachaValues;
  };

  setServerValues = (serverValues: string[]) => {
    this.serverValues = serverValues;
  };

  setQuery = (query: string) => {
    this.query = query;
  };

  setOpen = (open: boolean) => {
    this.open = open;
  };

  setDialogCharacterInfo = (info: CharacterInfo) => {
    this.dialogCharacterInfo = info;
  };
}

export const CharactersStoreContext = createContext<CharactersStore | null>(
  null,
);

const useCharactersStore = () => {
  const charactersStore = useContext(CharactersStoreContext);

  if (!charactersStore) {
    throw new Error(
      "useCharactersStore must be used under CharactersStoreContext.Provider",
    );
  }

  return charactersStore;
};

export default useCharactersStore;
