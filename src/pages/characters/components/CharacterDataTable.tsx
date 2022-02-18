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

import { Gender, Race, TableHeadNames, CharacterInfo } from "types/types";
import sampleCharacterDatas from "../data/SampleCharacterData";
import images from "assets";

interface CharacterDataTableProps {
  onClick: (info: CharacterInfo) => void;
}

const characterTableHeadNames: TableHeadNames[] = [
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

const getImage = (type: string, element: string): "*.webp" => {
  if (
    images[type + element[0].toUpperCase() + element.substring(1)] === undefined
  ) {
    return images["noImage"];
  }
  return images[type + element[0].toUpperCase() + element.substring(1)];
};

const getGender = (gender: Gender): string => {
  switch (gender) {
    case "male":
      return "男";
    case "female":
      return "女";
    case "unidentified":
      return "?";
    default:
      return "ERROR";
  }
};

const getRace = (race: Race[]): string => {
  let raceString: string = race.join("/");
  raceString = raceString.replace("human", "인간");
  raceString = raceString.replace("spirit", "정령");
  raceString = raceString.replace("demon", "악마");
  raceString = raceString.replace("beast", "야수");
  raceString = raceString.replace("machine", "기계");
  raceString = raceString.replace("yokai", "요괴");
  raceString = raceString.replace("dragon", "용");
  raceString = raceString.replace("undead", "불사");
  raceString = raceString.replace("water", "수서");
  raceString = raceString.replace("plant", "식물");
  return raceString;
};

const CharacterDataTable = ({ onClick }: CharacterDataTableProps) => {
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
          {sampleCharacterDatas.map((row) => (
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
                  className="rarity"
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
                {getGender(row.gender)}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {getRace(row.race)}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {row.skill.weight}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {row.rating}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: row.board2 ? "red" : "green", fontSize: "0.9rem" }}
              >
                {row.board2 ? "X" : "O"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterDataTable;
