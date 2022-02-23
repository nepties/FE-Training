import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Divider,
} from "@mui/material";

import { observer } from "mobx-react-lite";

import images from "assets";
import { TableHeadName, EquipmentInfo } from "types/types";
import useEquipmentsStore from "../useEquipmentsStore";

interface EquipmentDataTableProps {
  onClick: (info: EquipmentInfo) => void;
}

const EquipmentTableHeadNames: TableHeadName[] = [
  { align: "center", name: "이미지" },
  { align: "center", name: "속성" },
  { align: "center", name: "레어도" },
  { align: "left", name: "이름" },
  { align: "center", name: "설명" },
  { align: "center", name: ["HP", "[MAX]"] },
  { align: "center", name: ["ATK", "[MAX]"] },
  { align: "left", name: "획득처" },
];

const getImage = (type: string, element: string): "*.webp" => {
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

const EquipmentDataTable = observer(({ onClick }: EquipmentDataTableProps) => {
  const { equipmentData } = useEquipmentsStore();

  return (
    <TableContainer component={Box}>
      <Table className="equipment-table" aria-label="Equipment table">
        <TableHead>
          <TableRow>
            {EquipmentTableHeadNames.map((headName, index) => (
              <TableCell
                key={index}
                align={headName.align}
                sx={{ fontWeight: "bold" }}
              >
                {typeof headName.name === "string"
                  ? headName.name
                  : TextToJSXElement(headName.name, "equipment-table-head")}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {equipmentData.map((row) => (
            <TableRow
              key={row.prefix}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                verticalAlign: "top",
              }}
              hover
              onClick={() => {
                onClick(row);
              }}
            >
              <TableCell align="center">
                <img
                  className="equipment-thumb"
                  src={getImage("equipment", row.prefix)}
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
              <TableCell
                align="left"
                sx={{ fontSize: "0.9rem", maxWidth: "350px" }}
              >
                {TextToJSXElement(row.basic, "equipment-text blur")}
                <Divider sx={{ mb: "8px" }} />
                {TextToJSXElement(row.max, "equipment-text")}
                {row.awaken !== undefined
                  ? TextToJSXElement(row.awaken, "equipment-text")
                  : ""}
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontSize: "0.9rem", VerticalAlign: "top" }}
              >
                <div className="blur italic">{row.hp.min}</div>
                <div>{row.hp.max}</div>
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontSize: "0.9rem", VerticalAlign: "top" }}
              >
                <div className="blur italic">{row.atk.min}</div>
                <div>{row.atk.max}</div>
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "0.9rem", maxWidth: "180px" }}
              >
                {row.obtain}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default EquipmentDataTable;
