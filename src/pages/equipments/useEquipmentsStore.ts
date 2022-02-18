import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { EquipmentInfo } from "types/types";
import sampleEquipmentDatas from "./data/SampleEquipmentData";

export class EquipmentsStore {
  starValues: string[] = [];
  elementValues: string[] = [];
  gachaValues: string[] = [];
  query: string = "";
  open: boolean = false;
  dialogEquipmentInfo: EquipmentInfo = sampleEquipmentDatas[0];

  constructor() {
    makeAutoObservable(this);
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
}

export const EquipmentsStoreContext = createContext<EquipmentsStore | null>(
  null,
);

const useEquipmentsStore = () => {
  const EquipmentsStore = useContext(EquipmentsStoreContext);

  if (!EquipmentsStore) {
    throw new Error(
      "useEquipmentsStore must be used under EquipmentsStoreContext.Provider",
    );
  }

  return EquipmentsStore;
};

export default useEquipmentsStore;
