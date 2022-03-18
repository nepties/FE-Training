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

import MultilineText from "components/MultilineText";
import { getImage } from "utils/format";
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
                {typeof headName.name === "string" ? (
                  headName.name
                ) : (
                  <MultilineText
                    text={headName.name}
                    className="equipment-table-head"
                  />
                )}
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
                <MultilineText
                  text={row.basic}
                  className="equipment-text blur"
                />
                <Divider sx={{ mb: "8px" }} />
                <MultilineText text={row.max} className="equipment-text" />
                {row.awaken !== undefined ? (
                  <MultilineText text={row.awaken} className="equipment-text" />
                ) : (
                  ""
                )}
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
