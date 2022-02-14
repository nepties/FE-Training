import * as React from "react";
import { InputBase, Divider, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

interface SearchBarProps {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
}

const SearchBar = ({ onChange, onReset, value }: SearchBarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "0.5rem",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "4px",
      }}
    >
      <SearchIcon
        sx={{
          ml: "0.5rem",
          mr: "0.5rem",
          color: "rgba(0, 0, 0, 0.54)",
          width: "22px",
          height: "22px",
        }}
      />
      <Divider orientation="vertical" flexItem />
      <InputBase
        value={value}
        onChange={onChange}
        fullWidth
        placeholder="검색 (캐릭명, 별명, 어빌 등)"
        sx={{ ml: "0.5rem", fontSize: "0.875rem" }}
      ></InputBase>
      <IconButton onClick={onReset} size="small" sx={{ p: "4px" }}>
        <ClearRoundedIcon sx={{ width: "22px", height: "22px" }} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
