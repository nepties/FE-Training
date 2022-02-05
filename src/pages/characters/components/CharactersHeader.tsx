import React from "react";
import CustomToggleButtonGroup from "components/CustomToggleButtonGroup";
import * as images from "assets";
import { ButtonInfo } from "types/types";

import { observer } from "mobx-react-lite";
import { charactersStore } from "../useCharactersStore";

const starButtonsInfos: ButtonInfo[] = [
  { value: "5", tooltip: "5성", image: images.star5, text: "" },
  { value: "4", tooltip: "4성", image: images.star4, text: "" },
  { value: "3", tooltip: "3성", image: images.star3, text: "" },
  { value: "2", tooltip: "2성", image: images.star2, text: "" },
  { value: "1", tooltip: "1성", image: images.star1, text: "" },
];

const elementButtonsInfos: ButtonInfo[] = [
  { value: "fire", tooltip: "화", image: images.elementFire, text: "" },
  { value: "water", tooltip: "수", image: images.elementWater, text: "" },
  { value: "wind", tooltip: "풍", image: images.elementWind, text: "" },
  { value: "thunder", tooltip: "뇌", image: images.elementThunder, text: "" },
  { value: "light", tooltip: "광", image: images.elementLight, text: "" },
  { value: "dark", tooltip: "암", image: images.elementDark, text: "" },
];

const flipTypeButtonsInfos: ButtonInfo[] = [
  { value: "fighter", tooltip: "격투", image: images.flipFighter, text: "" },
  { value: "sword", tooltip: "검사", image: images.flipSword, text: "" },
  { value: "shooting", tooltip: "사격", image: images.flipShooting, text: "" },
  { value: "support", tooltip: "보조", image: images.flipSupport, text: "" },
  { value: "special", tooltip: "특수", image: images.flipSpecial, text: "" },
];

const genderTypeButtonsInfos: ButtonInfo[] = [
  { value: "male", tooltip: "남성", image: undefined, text: "男" },
  { value: "female", tooltip: "여성", image: undefined, text: "女" },
  { value: "unidentified", tooltip: "불명", image: undefined, text: "?" },
];

// prettier-ignore
const classTypeButtonsInfos: ButtonInfo[] = [
  { value: "attacker", tooltip: "어태커", image: images.classAttacker, text: "" },
  { value: "tanker", tooltip: "탱커", image: images.classTanker, text: "" },
  { value: "healer", tooltip: "힐러", image: images.classHealer, text: "" },
  { value: "supporter", tooltip: "서포터", image: images.classSupporter, text: "" },
  { value: "debuffer", tooltip: "디버퍼", image: images.classDebuffer, text: "" },
  { value: "balance", tooltip: "밸런스", image: images.classBalance, text: "" },
];

const raceTypeButtonsInfos: ButtonInfo[] = [
  { value: "human", tooltip: "인간", image: images.raceHuman, text: "" },
  { value: "spirit", tooltip: "정령", image: images.raceSpirit, text: "" },
  { value: "demon", tooltip: "악마", image: images.raceDemon, text: "" },
  { value: "beast", tooltip: "야수", image: images.raceBeast, text: "" },
  { value: "machine", tooltip: "인간", image: images.raceMachine },
  { value: "yokai", tooltip: "요괴", image: images.raceYokai, text: "" },
  { value: "dragon", tooltip: "용", image: images.raceDragon, text: "" },
  { value: "undead", tooltip: "불사", image: images.raceUndead, text: "" },
  { value: "water", tooltip: "수서", image: images.raceWater },
  { value: "plant", tooltip: "식물", image: images.racePlant },
];

const gachaTypeButtonsInfos: ButtonInfo[] = [
  { value: "normal", tooltip: "통상", text: "통상" },
  { value: "limited", tooltip: "한정", image: undefined, text: "한정" },
];

const serverTypeButtonsInfos: ButtonInfo[] = [
  { value: "global", tooltip: "글로벌", image: undefined, text: "글로벌" },
];

const CharactersHeader = observer(() => {
  const { starValues, setStarValues } = charactersStore;
  const handleChangeStarsButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setStarValues(values);
  };

  return (
    <div className="character-header">
      <CustomToggleButtonGroup
        label="stars"
        buttonInfos={starButtonsInfos}
        value={starValues}
        onChange={handleChangeStarsButtonGroup}
      />
      <CustomToggleButtonGroup
        label="elements"
        buttonInfos={elementButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="genderTypes"
        buttonInfos={genderTypeButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="flipTypes"
        buttonInfos={flipTypeButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="classTypes"
        buttonInfos={classTypeButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="raceTypes"
        buttonInfos={raceTypeButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="gachaTypes"
        buttonInfos={gachaTypeButtonsInfos}
      />
      <CustomToggleButtonGroup
        label="serverTypes"
        buttonInfos={serverTypeButtonsInfos}
      />
    </div>
  );
});

export default CharactersHeader;
