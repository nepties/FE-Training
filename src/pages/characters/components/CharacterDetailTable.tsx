import * as React from "react";
import { CharacterInfo, Gender, Race } from "types/types";
import { Chip, Stack } from "@mui/material";
import images from "assets";

interface CharacterDetailTableProps {
  info: CharacterInfo;
}

const TextToJSXElement = (text: string[], className: string): JSX.Element => {
  return (
    <div className={className}>
      {text.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

// const formatText = (
//   text: string[],
//   className: string,
//   key: number,
// ): JSX.Element => {
//   return (
//     <div key={key} className={className}>
//       {text.map((line, index) => (
//         <p key={index}>{line}</p>
//       ))}
//     </div>
//   );
// };

// const MultilineText = ({text, ...otherProps}: {text: string[]}) => (
//   <div {...otherProps}>
//     {text.map((line, index) => (
//       <p key={index}>{line}</p>
//     ))}
//   </div>
// );

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
      return "남성";
    case "female":
      return "여성";
    case "unidentified":
      return "불명";
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
              <Chip label={getGender(info.gender)} size="small" />
              <Chip label={getRace(info.race)} size="small" />
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
            {TextToJSXElement(info.skill.text, "character-detail-text")}
            <div className="character-detail-text">{info.skill.effect}</div>
          </td>
        </tr>
        <tr>
          <th>리더 특성</th>
          <td>
            <b>{info.leader.name}</b>
            {TextToJSXElement(info.leader.text, "character-detail-text")}
          </td>
        </tr>
        <tr>
          <th>어빌리티</th>
          <td className="character-detail-ability">
            {TextToJSXElement(info.ability1, "character-detail-text")}
            {TextToJSXElement(info.ability2, "character-detail-text")}
            {TextToJSXElement(info.ability3, "character-detail-text")}
            {info.ability4 !== undefined
              ? TextToJSXElement(info.ability4, "character-detail-text")
              : ""}
            {info.ability5 !== undefined
              ? TextToJSXElement(info.ability5, "character-detail-text")
              : ""}
            {info.ability6 !== undefined
              ? TextToJSXElement(info.ability6, "character-detail-text")
              : ""}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CharacterDetailTable;
