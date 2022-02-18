import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/CloseRounded";

import images from "assets";
import { CharacterInfo } from "types/types";
import CharacterDetailTable from "./CharacterDetailTable";

interface CharacterDialogProps {
  open: boolean;
  info: CharacterInfo;
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

const CharacterDialog = ({ open, info, onClose }: CharacterDialogProps) => {
  const [checked, setChecked] = React.useState(false);
  const [showAwaken, setShowAwaken] = React.useState(false);
  const [showDefault, setShowDefault] = React.useState(true);

  const handleAwakenChange = () => {
    setChecked((prev) => !prev);
    if (showDefault) {
      setShowDefault(false);
    } else {
      setShowAwaken(false);
    }
  };

  const resetAwakenChange = () => {
    if (checked) {
      setChecked(false);
      setShowDefault(true);
      setShowAwaken(false);
    }
  };

  const closeDialog = () => {
    resetAwakenChange();
    onClose();
  };

  return (
    <Dialog onClose={closeDialog} open={open} maxWidth="md" scroll="body">
      <DialogTitle>
        {info.name}
        <IconButton
          aria-label="exit"
          sx={{ float: "right", p: 0 }}
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ border: "1px solid #999", borderRadius: "10px" }}>
              <Fade
                in={showDefault}
                onExited={() => {
                  setShowAwaken(true);
                }}
                timeout={{ appear: 0, enter: 2000, exit: 0 }}
                unmountOnExit
              >
                <img
                  className="character-full"
                  src={getImage("full", info.prefix)}
                  alt=""
                />
              </Fade>
              <Fade
                in={showAwaken}
                onExited={() => {
                  setShowDefault(true);
                }}
                timeout={{ appear: 0, enter: 2000, exit: 0 }}
                unmountOnExit
              >
                <img
                  className="character-full"
                  src={getImage("awaken", info.prefix)}
                  alt=""
                />
              </Fade>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={handleAwakenChange}
                    color="secondary"
                  />
                }
                label="각성"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <CharacterDetailTable info={info} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: "20px 24px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#17a2b8",
            color: "#ffffff",
            ":hover": {
              backgroundColor: "#138496",
            },
          }}
          onClick={closeDialog}
          disableRipple
        >
          유저 평가
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#28a745",
            color: "#ffffff",
            ":hover": {
              backgroundColor: "#218838",
            },
          }}
          onClick={closeDialog}
          disableRipple
        >
          편성 검색
        </Button>
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

export default CharacterDialog;
