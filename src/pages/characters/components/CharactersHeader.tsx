import React, { useContext } from "react";
import CustomToggleButtonGroup from "components/CustomToggleButtonGroup";
import SearchBar from "components/SearchBar";
import * as images from "assets";
import { ButtonInfo } from "types/types";

import { observer } from "mobx-react-lite";
import useCharactersStore from "../useCharactersStore";

const starButtonsInfos: ButtonInfo[] = [
  { value: "5", tooltip: "5성", image: images.star5 },
  { value: "4", tooltip: "4성", image: images.star4 },
  { value: "3", tooltip: "3성", image: images.star3 },
  { value: "2", tooltip: "2성", image: images.star2 },
  { value: "1", tooltip: "1성", image: images.star1 },
];

const elementButtonsInfos: ButtonInfo[] = [
  { value: "fire", tooltip: "화", image: images.elementFire },
  { value: "water", tooltip: "수", image: images.elementWater },
  { value: "wind", tooltip: "풍", image: images.elementWind },
  { value: "thunder", tooltip: "뇌", image: images.elementThunder },
  { value: "light", tooltip: "광", image: images.elementLight },
  { value: "dark", tooltip: "암", image: images.elementDark },
];

const flipTypeButtonsInfos: ButtonInfo[] = [
  { value: "fighter", tooltip: "격투", image: images.flipFighter },
  { value: "sword", tooltip: "검사", image: images.flipSword },
  { value: "shooting", tooltip: "사격", image: images.flipShooting },
  { value: "support", tooltip: "보조", image: images.flipSupport },
  { value: "special", tooltip: "특수", image: images.flipSpecial },
];

const genderButtonsInfos: ButtonInfo[] = [
  { value: "male", tooltip: "남성", text: "男" },
  { value: "female", tooltip: "여성", text: "女" },
  { value: "unidentified", tooltip: "불명", text: "?" },
];

const classButtonsInfos: ButtonInfo[] = [
  { value: "attacker", tooltip: "어태커", image: images.classAttacker },
  { value: "tanker", tooltip: "탱커", image: images.classTanker },
  { value: "healer", tooltip: "힐러", image: images.classHealer },
  { value: "supporter", tooltip: "서포터", image: images.classSupporter },
  { value: "debuffer", tooltip: "디버퍼", image: images.classDebuffer },
  { value: "balance", tooltip: "밸런스", image: images.classBalance },
];

const raceButtonsInfos: ButtonInfo[] = [
  { value: "human", tooltip: "인간", image: images.raceHuman },
  { value: "spirit", tooltip: "정령", image: images.raceSpirit },
  { value: "demon", tooltip: "악마", image: images.raceDemon },
  { value: "beast", tooltip: "야수", image: images.raceBeast },
  { value: "machine", tooltip: "인간", image: images.raceMachine },
  { value: "yokai", tooltip: "요괴", image: images.raceYokai },
  { value: "dragon", tooltip: "용", image: images.raceDragon },
  { value: "undead", tooltip: "불사", image: images.raceUndead },
  { value: "water", tooltip: "수서", image: images.raceWater },
  { value: "plant", tooltip: "식물", image: images.racePlant },
];

const gachaButtonsInfos: ButtonInfo[] = [
  { value: "normal", tooltip: "통상", text: "통상" },
  { value: "limited", tooltip: "한정", text: "한정" },
  { value: "event", tooltip: "이벤트", text: "이벤트" },
];

const serverButtonsInfos: ButtonInfo[] = [
  { value: "global", tooltip: "글로벌", text: "글로벌" },
];

const CharactersHeader = observer(() => {
  const {
    starValues,
    setStarValues,
    elementValues,
    setElementValues,
    flipTypeValues,
    setFlipTypeValues,
    genderValues,
    setGenderValues,
    classValues,
    setClassValues,
    raceValues,
    setRaceValues,
    gachaValues,
    setGachaValues,
    serverValues,
    setServerValues,
    query,
    setQuery,
  } = useCharactersStore();

  const handleChangeStarsButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setStarValues(values);
  };

  const handleChangeElementButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setElementValues(values);
  };

  const handleChangeFlipTypeButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setFlipTypeValues(values);
  };

  const handleChangeGenderButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setGenderValues(values);
  };

  const handleChangeClassButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setClassValues(values);
  };

  const handleChangeRaceButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setRaceValues(values);
  };

  const handleChangeGachaButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setGachaValues(values);
  };

  const handleChangeServerButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setServerValues(values);
  };

  const handleChangeQuery = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
  };

  const handleResetQuery = (e: React.MouseEvent) => {
    setQuery("");
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
        value={elementValues}
        onChange={handleChangeElementButtonGroup}
      />
      <CustomToggleButtonGroup
        label="flipTypes"
        buttonInfos={flipTypeButtonsInfos}
        value={flipTypeValues}
        onChange={handleChangeFlipTypeButtonGroup}
      />
      <CustomToggleButtonGroup
        label="gender"
        buttonInfos={genderButtonsInfos}
        value={genderValues}
        onChange={handleChangeGenderButtonGroup}
      />
      <CustomToggleButtonGroup
        label="class"
        buttonInfos={classButtonsInfos}
        value={classValues}
        onChange={handleChangeClassButtonGroup}
      />
      <CustomToggleButtonGroup
        label="race"
        buttonInfos={raceButtonsInfos}
        value={raceValues}
        onChange={handleChangeRaceButtonGroup}
      />
      <CustomToggleButtonGroup
        label="gacha"
        buttonInfos={gachaButtonsInfos}
        value={gachaValues}
        onChange={handleChangeGachaButtonGroup}
      />
      <CustomToggleButtonGroup
        label="server"
        buttonInfos={serverButtonsInfos}
        value={serverValues}
        onChange={handleChangeServerButtonGroup}
      />
      <SearchBar
        value={query}
        onChange={handleChangeQuery}
        onReset={handleResetQuery}
      />
    </div>
  );
});

export default CharactersHeader;
