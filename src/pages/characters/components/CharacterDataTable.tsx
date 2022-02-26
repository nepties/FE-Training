import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import { observer } from "mobx-react-lite";

import { getImage, formatGender, formatRace } from "utils/format";
import { TableHeadName, CharacterInfo } from "types/types";
import useCharactersStore from "../useCharactersStore";

interface CharacterDataTableProps {
  onClick: (info: CharacterInfo) => void;
}

const characterTableHeadNames: TableHeadName[] = [
  { align: "center", name: "썸네일" },
  { align: "center", name: "도트" },
  { align: "center", name: "속성" },
  { align: "center", name: "레어도" },
  { align: "left", name: "이름" },
  { align: "center", name: "타입" },
  { align: "center", name: "스탠스" },
  { align: "center", name: "성별" },
  { align: "center", name: "종족" },
  { align: "center", name: "스킬 웨이트" },
  { align: "center", name: "유저 평점" },
  { align: "center", name: "마나보드2" },
];

const CharacterDataTable = observer(({ onClick }: CharacterDataTableProps) => {
  const { characterData } = useCharactersStore();

  return (
    <TableContainer component={Box}>
      <Table aria-label="character table">
        <TableHead>
          <TableRow>
            {characterTableHeadNames.map((headName, index) => (
              <TableCell
                key={index}
                align={headName.align}
                sx={{ fontWeight: "bold" }}
              >
                {headName.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {characterData.map((row) => (
            <TableRow
              key={row.prefix}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              hover
              onClick={() => {
                onClick(row);
              }}
            >
              <TableCell align="center">
                <img
                  className="character-thumb"
                  src={getImage("thumb", row.prefix)}
                  alt=""
                />
              </TableCell>
              <TableCell align="center">
                <img
                  className="character-pixel"
                  src={getImage("pixel", row.prefix)}
                  alt=""
                />
              </TableCell>
              <TableCell align="center">
                <img
                  className="element"
                  src={getImage("element", row.element)}
                  alt=""
                />
              </TableCell>
              <TableCell align="center">
                <img
                  className="star"
                  src={getImage("star", row.rarity)}
                  alt=""
                />
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "0.9rem" }}>
                {row.name}
              </TableCell>
              <TableCell align="center">
                <img
                  className="flip-type"
                  src={getImage("flip", row.flipType)}
                  alt=""
                />
              </TableCell>
              <TableCell align="center">
                <img
                  className="class"
                  src={getImage("class", row.class)}
                  alt=""
                />
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {formatGender(row.gender)}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {formatRace(row.race)}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {row.skill.weight}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {row.rating}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: row.board2 ? "green" : "red", fontSize: "0.9rem" }}
              >
                {row.board2 ? "O" : "X"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default CharacterDataTable;
