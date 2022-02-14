import * as React from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { CharacterInfo } from "types/types";

interface CharacterDialogProps {
  open: boolean;
  info: CharacterInfo;
  onClose: (event: object, reason: string) => void;
}

const CharacterDialog = ({ open, info, onClose }: CharacterDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{info.name}</DialogTitle>
    </Dialog>
  );
};

export default CharacterDialog;
