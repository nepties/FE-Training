import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/CloseRounded";

import MultilineText from "components/MultilineText";
import { getImage } from "utils/format";
import { EquipmentInfo } from "types/types";

interface EquipmentDialogProps {
  open: boolean;
  info: EquipmentInfo;
  onClose: () => void;
}

const EquipmentDialog = ({ open, info, onClose }: EquipmentDialogProps) => {
  const closeDialog = () => {
    onClose();
  };

  return (
    <Dialog onClose={closeDialog} open={open} maxWidth="xs" scroll="body">
      <DialogTitle>
        장비 상세정보
        <IconButton
          aria-label="exit"
          sx={{ float: "right", p: 0 }}
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="equipment-dialog" dividers>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          spacing={1}
        >
          <img
            className="equipment-thumb"
            src={getImage("equipment", info.prefix)}
            alt=""
          />
          <img
            className="element"
            src={getImage("element", info.element)}
            alt=""
          />
          <img className="element" src={getImage("star", info.rarity)} alt="" />
        </Stack>
        <Divider />
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          spacing={5}
        >
          <div>
            HP: <span className="blur italic">{info.hp.min}</span> /{" "}
            <span>{info.hp.max}</span>
          </div>
          <div>
            ATK: <span className="blur italic">{info.atk.min}</span> /{" "}
            <span>{info.atk.max}</span>
          </div>
        </Stack>
        <Divider />
        <Box sx={{ textAlign: "center" }}>{info.name}</Box>
        <Divider />
        <MultilineText text={info.basic} className="equipment-text blur" />
        <Divider />
        <MultilineText text={info.max} className="equipment-text" />
        {info.awaken !== undefined ? (
          <MultilineText text={info.awaken} className="equipment-text" />
        ) : (
          ""
        )}
        <Divider />
        <Box sx={{ textAlign: "center" }}>{info.obtain}</Box>
      </DialogContent>
      <DialogActions sx={{ p: "20px 24px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#343a40",
            color: "#ffffff",
            ":hover": {
              backgroundColor: "#23272b",
            },
          }}
          onClick={closeDialog}
          disableRipple
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EquipmentDialog;
