import {
  makeObservable,
  observable,
  action,
  reaction,
  runInAction,
} from "mobx";
import { createContext, useContext } from "react";
import { CharacterInfo } from "types/types";
import sampleCharacterDatas from "./data/SampleCharacterData";

import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "firestore";

export class CharactersStore {
  starValues: string[] = [];
  elementValues: string[] = [];
  flipTypeValues: string[] = [];
  genderValues: string[] = [];
  classValues: string[] = [];
  raceValues: string[] = [];
  obtainValues: string[] = [];
  query: string = "";
  open: boolean = false;
  dialogCharacterInfo: CharacterInfo = sampleCharacterDatas[0];

  cDataByStar: CharacterInfo[] = [];
  cDataByElement: CharacterInfo[] = [];
  cDataByFlipType: CharacterInfo[] = [];
  cDataByGender: CharacterInfo[] = [];
  cDataByClass: CharacterInfo[] = [];
  cDataByRace: CharacterInfo[] = [];
  cDataByObtain: CharacterInfo[] = [];

  characterData: CharacterInfo[] = [];

  constructor() {
    makeObservable(this, {
      starValues: observable,
      elementValues: observable,
      flipTypeValues: observable,
      genderValues: observable,
      classValues: observable,
      raceValues: observable,
      obtainValues: observable,
      query: observable,
      open: observable,
      dialogCharacterInfo: observable,
      characterData: observable,

      setStarValues: action,
      setElementValues: action,
      setFlipTypeValues: action,
      setGenderValues: action,
      setClassValues: action,
      setRaceValues: action,
      setObtainValues: action,
      setQuery: action,
      setOpen: action,
      setDialogCharacterInfo: action,
      fetchCharacterData: action,
      mergeCharacterDataArrays: action,
    });

    // https://mobx.js.org/reactions.html
    // autorun
    // reaction

    reaction(
      () => this.starValues,
      async (starValues) => {
        this.cDataByStar = [];
        if (starValues.length !== 0) {
          this.cDataByStar = await this.fetchCharacterDataByFilter(
            "rarity",
            "in",
            starValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.elementValues,
      async (elementValues) => {
        this.cDataByElement = [];
        if (elementValues.length !== 0) {
          this.cDataByElement = await this.fetchCharacterDataByFilter(
            "element",
            "in",
            elementValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.flipTypeValues,
      async (flipTypeValues) => {
        this.cDataByFlipType = [];
        if (flipTypeValues.length !== 0) {
          this.cDataByFlipType = await this.fetchCharacterDataByFilter(
            "flipType",
            "in",
            flipTypeValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.genderValues,
      async (genderValues) => {
        this.cDataByGender = [];
        if (genderValues.length !== 0) {
          this.cDataByGender = await this.fetchCharacterDataByFilter(
            "gender",
            "in",
            genderValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.classValues,
      async (classValues) => {
        this.cDataByClass = [];
        if (classValues.length !== 0) {
          this.cDataByClass = await this.fetchCharacterDataByFilter(
            "class",
            "in",
            classValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.raceValues,
      async (raceValues) => {
        this.cDataByRace = [];
        if (raceValues.length !== 0) {
          this.cDataByClass = await this.fetchCharacterDataByFilter(
            "race",
            "array-contains-any",
            raceValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );

    reaction(
      () => this.obtainValues,
      async (obtainValues) => {
        this.cDataByObtain = [];
        if (obtainValues.length !== 0) {
          this.cDataByObtain = await this.fetchCharacterDataByFilter(
            "obtain",
            "in",
            obtainValues,
          );
        }
        await this.mergeCharacterDataArrays();
      },
    );
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

  setObtainValues = (obtainValues: string[]) => {
    this.obtainValues = obtainValues;
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

  fetchCharacterData = async () => {
    const querySnapshot = await getDocs(
      query(collection(firestore, "characters")),
    );
    const characterData: CharacterInfo[] = [];
    querySnapshot.forEach((doc) => {
      characterData.push(doc.data() as CharacterInfo);
    });
    runInAction(() => {
      this.characterData = characterData;
    });
  };

  fetchCharacterDataByFilter = async (
    field: string,
    opStr: "in" | "array-contains-any",
    filter: string[],
  ) => {
    const q = query(
      collection(firestore, "characters"),
      where(field, opStr, filter),
    );
    const querySnapshot = await getDocs(q);

    const characterData: CharacterInfo[] = [];
    querySnapshot.forEach((doc) => {
      characterData.push(doc.data() as CharacterInfo);
    });
    return characterData;
  };

  getIntersection = (
    cData: CharacterInfo[],
    numOfArrays: number,
  ): CharacterInfo[] => {
    if (numOfArrays === 1) {
      return cData;
    }

    const intersection: CharacterInfo[] = [];
    const map = new Map<String, number>();

    cData.forEach((data) => {
      if (map.has(data.prefix)) {
        const count = map.get(data.prefix) as number;
        map.set(data.prefix, count + 1);
        if (count + 1 === numOfArrays) {
          intersection.push(data);
        }
      } else {
        map.set(data.prefix, 1);
      }
    });
    return intersection;
  };

  mergeCharacterDataArrays = async () => {
    let cData: CharacterInfo[] = [];
    let mergedArrayCount = 0;

    if (this.starValues.length !== 0) {
      cData = cData.concat(this.cDataByStar);
      mergedArrayCount++;
    }
    if (this.elementValues.length !== 0) {
      cData = cData.concat(this.cDataByElement);
      mergedArrayCount++;
    }
    if (this.flipTypeValues.length !== 0) {
      cData = cData.concat(this.cDataByFlipType);
      mergedArrayCount++;
    }
    if (this.genderValues.length !== 0) {
      cData = cData.concat(this.cDataByGender);
      mergedArrayCount++;
    }
    if (this.classValues.length !== 0) {
      cData = cData.concat(this.cDataByClass);
      mergedArrayCount++;
    }
    if (this.raceValues.length !== 0) {
      cData = cData.concat(this.cDataByRace);
      mergedArrayCount++;
    }
    if (this.obtainValues.length !== 0) {
      cData = cData.concat(this.cDataByObtain);
      mergedArrayCount++;
    }

    if (mergedArrayCount === 0) {
      await this.fetchCharacterData();
    } else {
      this.characterData = this.getIntersection(cData, mergedArrayCount);
    }
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
