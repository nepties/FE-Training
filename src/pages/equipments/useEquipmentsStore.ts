import {
  makeObservable,
  observable,
  action,
  reaction,
  runInAction,
} from "mobx";
import { createContext, useContext } from "react";
import { EquipmentInfo } from "types/types";
import sampleEquipmentDatas from "./data/SampleEquipmentData";

import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "firestore";

export class EquipmentsStore {
  starValues: string[] = [];
  elementValues: string[] = [];
  gachaValues: string[] = [];
  query: string = "";
  open: boolean = false;
  dialogEquipmentInfo: EquipmentInfo = sampleEquipmentDatas[0];

  eDataByStar: EquipmentInfo[] = [];
  eDataByElement: EquipmentInfo[] = [];
  eDataByGacha: EquipmentInfo[] = [];

  equipmentData: EquipmentInfo[] = [];

  constructor() {
    makeObservable(this, {
      starValues: observable,
      elementValues: observable,
      gachaValues: observable,
      query: observable,
      open: observable,
      dialogEquipmentInfo: observable,
      equipmentData: observable,

      setStarValues: action,
      setElementValues: action,
      setGachaValues: action,
      setQuery: action,
      setOpen: action,
      setDialogEquipmentInfo: action,
      fetchEquipmentData: action,
      mergeEquipmentDataArrays: action,
    });

    reaction(
      () => this.starValues,
      async (starValues) => {
        this.eDataByStar = [];
        if (starValues.length !== 0) {
          this.eDataByStar = await this.fetchEquipmentDataByFilter(
            "rarity",
            "in",
            starValues,
          );
        }
        await this.mergeEquipmentDataArrays();
      },
    );

    reaction(
      () => this.elementValues,
      async (elementValues) => {
        this.eDataByElement = [];
        if (elementValues.length !== 0) {
          this.eDataByElement = await this.fetchEquipmentDataByFilter(
            "element",
            "in",
            elementValues,
          );
        }
        await this.mergeEquipmentDataArrays();
      },
    );

    reaction(
      () => this.gachaValues,
      async (gachaValues) => {
        this.eDataByGacha = [];
        if (gachaValues.length !== 0) {
          this.eDataByGacha = await this.fetchEquipmentDataByFilter(
            "gacha",
            "in",
            gachaValues,
          );
        }
        await this.mergeEquipmentDataArrays();
      },
    );
  }

  setStarValues = (starValues: string[]) => {
    this.starValues = starValues;
  };

  setElementValues = (elementValues: string[]) => {
    this.elementValues = elementValues;
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

  setDialogEquipmentInfo = (info: EquipmentInfo) => {
    this.dialogEquipmentInfo = info;
  };

  fetchEquipmentData = async () => {
    const querySnapshot = await getDocs(
      query(collection(firestore, "equipments")),
    );

    const equipmentData: EquipmentInfo[] = [];
    querySnapshot.forEach((doc) => {
      equipmentData.push(doc.data() as EquipmentInfo);
    });
    runInAction(() => {
      this.equipmentData = equipmentData;
    });
  };

  fetchEquipmentDataByFilter = async (
    field: string,
    opStr: "in" | "array-contains-any",
    filter: string[],
  ) => {
    const q = query(
      collection(firestore, "equipments"),
      where(field, opStr, filter),
    );
    const querySnapshot = await getDocs(q);

    const equipmentData: EquipmentInfo[] = [];
    querySnapshot.forEach((doc) => {
      equipmentData.push(doc.data() as EquipmentInfo);
    });
    return equipmentData;
  };

  getIntersection = (
    eData: EquipmentInfo[],
    numOfArrays: number,
  ): EquipmentInfo[] => {
    if (numOfArrays === 1) {
      return eData;
    }

    const intersection: EquipmentInfo[] = [];
    const map = new Map<String, number>();

    eData.forEach((data) => {
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

  mergeEquipmentDataArrays = async () => {
    let eData: EquipmentInfo[] = [];
    let mergedArrayCount = 0;

    if (this.starValues.length !== 0) {
      eData = eData.concat(this.eDataByStar);
      mergedArrayCount++;
    }
    if (this.elementValues.length !== 0) {
      eData = eData.concat(this.eDataByElement);
      mergedArrayCount++;
    }
    if (this.gachaValues.length !== 0) {
      eData = eData.concat(this.eDataByGacha);
      mergedArrayCount++;
    }

    if (mergedArrayCount === 0) {
      await this.fetchEquipmentData();
    } else {
      this.equipmentData = this.getIntersection(eData, mergedArrayCount);
    }
  };
}

export const EquipmentsStoreContext = createContext<EquipmentsStore | null>(
  null,
);

const useEquipmentsStore = () => {
  const equipmentsStore = useContext(EquipmentsStoreContext);

  if (!equipmentsStore) {
    throw new Error(
      "useEquipmentsStore must be used under EquipmentsStoreContext.Provider",
    );
  }

  return equipmentsStore;
};

export default useEquipmentsStore;
