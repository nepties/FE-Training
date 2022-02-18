import React, { useState } from "react";
import EquipmentsHeader from "./components/EquipmentsHeader";
import EquipmentsMain from "./components/EquipmentsMain";
import "./Equipments.css";
import { EquipmentsStore, EquipmentsStoreContext } from "./useEquipmentsStore";

const EquipmentsPage = () => {
  const [equipmentsStore] = useState(new EquipmentsStore());

  return (
    <EquipmentsStoreContext.Provider value={equipmentsStore}>
      <div className="container">
        <EquipmentsHeader />
        <EquipmentsMain />
      </div>
    </EquipmentsStoreContext.Provider>
  );
};

export default EquipmentsPage;
