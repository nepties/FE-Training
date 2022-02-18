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

import images from "assets";
import { EquipmentInfo } from "types/types";

interface EquipmentDialogProps {
  open: boolean;
  info: EquipmentInfo;
  onClose: () => void;
}

const getImage = (type: string, element: string): "*.webp" | "*.jpg" => {
  if (
    images[type + element[0].toUpperCase() + element.substring(1)] === undefined
  ) {
    return images["noImage"];
  }
  return images[type + element[0].toUpperCase() + element.substring(1)];
};

const TextToJSXElement = (text: string[], className: string): JSX.Element => {
  return (
    <div className={className}>
      {text.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

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
        {TextToJSXElement(info.basic, "equipment-text blur")}
        <Divider />
        {TextToJSXElement(info.max, "equipment-text")}
        {info.awaken !== undefined
          ? TextToJSXElement(info.awaken, "equipment-text")
          : ""}
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
