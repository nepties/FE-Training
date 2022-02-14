import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material";
import { ButtonInfo } from "../types/types";
import { Box, Tooltip } from "@mui/material";

interface CustomToggleButtonGroup extends ToggleButtonGroupProps {
  label: string;
  buttonInfos: ButtonInfo[];
}

const CustomToggleButtonGroup = ({
  label,
  buttonInfos,
  ...otherProps
}: CustomToggleButtonGroup) => {
  return (
    <ToggleButtonGroup aria-label={label} {...otherProps}>
      {buttonInfos.map((buttonInfo) => (
        <ToggleButton
          value={buttonInfo.value}
          aria-label={buttonInfo.value}
          key={buttonInfo.value}
        >
          <Tooltip key={buttonInfo.value} title={buttonInfo.tooltip} arrow>
            <Box display="flex" alignItems="center" height="21px">
              {buttonInfo.image !== undefined ? (
                <img src={buttonInfo.image} />
              ) : (
                buttonInfo.text
              )}
            </Box>
          </Tooltip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggleButtonGroup;
