import * as React from "react";
import { CharacterInfo } from "types/types";
import { Chip, Stack } from "@mui/material";
import MultilineText from "components/MultilineText";
import { getImage, formatGender, formatRace } from "utils/format";

interface CharacterDetailTableProps {
  info: CharacterInfo;
}

const CharacterDetailTable = ({ info }: CharacterDetailTableProps) => {
  return (
    <table className="character-detail-table">
      <tbody>
        <tr>
          <td colSpan={2}>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              spacing={1}
            >
              <img
                className="element"
                src={getImage("element", info.element)}
                alt=""
              />
              <img
                className="star"
                src={getImage("star", info.rarity)}
                alt=""
              />
              <img
                className="flip-type"
                src={getImage("flip", info.flipType)}
                alt=""
              />
              <img
                className="class"
                src={getImage("class", info.class)}
                alt=""
              />
              <Chip label={formatGender(info.gender)} size="small" />
              <Chip label={formatRace(info.race)} size="small" />
            </Stack>
          </td>
        </tr>
        <tr>
          <th>스킬</th>
          <td>
            <div className="skill-name">
              <b>{info.skill.name}</b>
              <small> (스킬 웨이트: {info.skill.weight})</small>
            </div>
            <MultilineText
              text={info.skill.text}
              className="character-detail-text"
            />
            <div className="character-detail-text">{info.skill.effect}</div>
          </td>
        </tr>
        <tr>
          <th>리더 특성</th>
          <td>
            <b>{info.leader.name}</b>
            <MultilineText
              text={info.leader.text}
              className="character-detail-text"
            />
          </td>
        </tr>
        <tr>
          <th>어빌리티</th>
          <td className="character-detail-ability">
            <MultilineText
              text={info.ability1}
              className="character-detail-text"
            />
            <MultilineText
              text={info.ability2}
              className="character-detail-text"
            />
            <MultilineText
              text={info.ability3}
              className="character-detail-text"
            />
            {info.ability4 !== undefined ? (
              <MultilineText
                text={info.ability4}
                className="character-detail-text"
              />
            ) : (
              ""
            )}
            {info.ability5 !== undefined ? (
              <MultilineText
                text={info.ability5}
                className="character-detail-text"
              />
            ) : (
              ""
            )}
            {info.ability6 !== undefined ? (
              <MultilineText
                text={info.ability6}
                className="character-detail-text"
              />
            ) : (
              ""
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CharacterDetailTable;
