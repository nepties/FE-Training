import { makeAutoObservable } from "mobx";

class CharactersStore {
  starValues: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStarValues = (starValues: string[]) => {
    this.starValues = starValues;
  };
}

export const charactersStore = new CharactersStore();

// const CharacersStoreContext = <CharactersStore | null>(null)

// const useCharactersStore = () => {

// }
