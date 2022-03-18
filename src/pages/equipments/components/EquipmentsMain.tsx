import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import useEquipmentsStore from "../useEquipmentsStore";

import EquipmentDataTable from "./EquipmentDataTable";
import EquipmentDialog from "./EquipmentDialog";
import { EquipmentInfo } from "types/types";

const EquipmentsMain = observer(() => {
  const {
    open,
    setOpen,
    dialogEquipmentInfo,
    setDialogEquipmentInfo,
    fetchEquipmentData,
  } = useEquipmentsStore();

  const openDialog = (info: EquipmentInfo) => {
    setOpen(true);
    setDialogEquipmentInfo(info);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchEquipmentData();
  }, [fetchEquipmentData]);

  return (
    <>
      <EquipmentDataTable onClick={openDialog} />
      <EquipmentDialog
        open={open}
        info={dialogEquipmentInfo}
        onClose={closeDialog}
      />
    </>
  );
});

export default EquipmentsMain;
