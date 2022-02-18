import React from "react";

import { observer } from "mobx-react-lite";
import EquipmentDataTable from "./EquipmentDataTable";
import useEquipmentsStore from "../useEquipmentsStore";
import EquipmentDialog from "./EquipmentDialog";
import { EquipmentInfo } from "types/types";

const EquipmentsMain = observer(() => {
  const { open, setOpen, dialogEquipmentInfo, setDialogEquipmentInfo } =
    useEquipmentsStore();

  const openDialog = (info: EquipmentInfo) => {
    setOpen(true);
    setDialogEquipmentInfo(info);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <EquipmentDataTable onClick={openDialog} />
      <EquipmentDialog
        open={open}
        info={dialogEquipmentInfo}
        onClose={closeDialog}
      />
    </div>
  );
});

export default EquipmentsMain;
