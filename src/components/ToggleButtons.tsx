import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ButtonInfo } from "../types/types";
import { Tooltip } from "@mui/material";

interface ToggleButtonsProps {
  buttonGroupLabel: string;
  buttonInfos: ButtonInfo[];
}

const ToggleButtons = ({
  buttonGroupLabel,
  buttonInfos,
}: ToggleButtonsProps) => {
  const [selects, setSelects] = React.useState(() => [] as string[]);

  const handleSelects = (
    event: React.MouseEvent<HTMLElement>,
    newSelects: string[],
  ) => {
    setSelects(newSelects);
  };

  return (
    <ToggleButtonGroup
      value={selects}
      onChange={handleSelects}
      aria-label={buttonGroupLabel}
      size="small"
    >
      {buttonInfos.map((buttonInfo) => (
        <Tooltip title={buttonInfo.tooltip}>
          <ToggleButton value={buttonInfo.value} aria-label={buttonInfo.value}>
            <img src={buttonInfo.image} />
          </ToggleButton>
        </Tooltip>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
