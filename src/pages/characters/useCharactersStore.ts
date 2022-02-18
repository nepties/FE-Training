import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { CharacterInfo } from "types/types";
import sampleCharacterDatas from "./data/SampleCharacterData";

export class CharactersStore {
  starValues: string[] = [];
  elementValues: string[] = [];
  flipTypeValues: string[] = [];
  genderValues: string[] = [];
  classValues: string[] = [];
  raceValues: string[] = [];
  gachaValues: string[] = [];
  query: string = "";
  open: boolean = false;
  dialogCharacterInfo: CharacterInfo = sampleCharacterDatas[0];

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
