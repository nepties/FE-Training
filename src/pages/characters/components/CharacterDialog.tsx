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
            <table className="character-detail-table">
              <tbody>
                <tr>
                  <td colSpan={2}>HEADER</td>
                </tr>
                <tr>
                  <th>스킬</th>
                  <td>
                    <b>트릭 보머</b> <small>(스킬 웨이트: 400)</small>
                    <br />
                    전방에 폭탄을 던져 명중한 적에게 화속성 데미지 + 공격력 다운
                    효과
                    <br />
                    <br />
                    x18 6hit, 공격력-30% (30s)
                  </td>
                </tr>
                <tr>
                  <th>리더 특성</th>
                  <td>
                    <b>트랩 엑스퍼트</b>
                    <br />
                    화속성 캐릭터의 공격력+50% &amp; 풍속성 내성+15%
                    <br />
                    자신이 스킬을 발동할 때마다, 화속성 캐릭터의 공격력+30%
                    [최대+90%]
                  </td>
                </tr>
                <tr>
                  <th>어빌리티</th>
                  <td>
                    화속성 캐릭터의 풍속성 내성+15%
                    <br />
                    자신이 스킬을 발동할 때마다, 화속성 캐릭터의 풍속성 내성+5%
                    [최대+10%]
                    <br />
                    <br />
                    1체의 적의 약화 효과 1개당, 화속성 캐릭터의 그 적에 대한
                    공격력+16% [최대+80%]
                    <br />
                    <br />
                    메인 캐릭터로 편성 시, 배틀 시작 시, 자신의 스킬 게이지+100%
                    &amp; 『트릭 보머』에 「명중한 적에게 화속성 내성 다운
                    효과」를 추가
                    <br />
                    메인 캐릭터로 편성 시, 자신이 스킬을 발동할 때마다, 화속성
                    캐릭터의 풍속성 내성+5% [최대+10%]
                    <br />
                    메인 캐릭터로 편성 시, 1체의 적의 약화 효과 1개당, 화속성
                    캐릭터의 그 적에 대한 공격력+12% [최대+60%]
                  </td>
                </tr>
              </tbody>
            </table>
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
