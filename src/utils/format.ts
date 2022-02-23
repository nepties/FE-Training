import images from "assets";
import { Gender, Race } from "types/types";

export const getImage = (type: string, element: string): "*.webp" => {
  if (
    images[type + element[0].toUpperCase() + element.substring(1)] === undefined
  ) {
    return images["noImage"];
  }
  return images[type + element[0].toUpperCase() + element.substring(1)];
};

export const getGender = (gender: Gender): string => {
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

export const getRace = (race: Race[]): string => {
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
