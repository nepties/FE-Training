import React from "react";
import CustomToggleButtonGroup from "components/CustomToggleButtonGroup";
import SearchBar from "components/SearchBar";
import images from "assets";
import { ButtonInfo } from "types/types";
import { observer } from "mobx-react-lite";
import useEquipmentsStore from "../useEquipmentsStore";

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
  { value: "none", tooltip: "전속성", image: images.elementNone },
];

const gachaButtonsInfos: ButtonInfo[] = [
  {
    value: "nonGacha",
    tooltip: "가챠 이외의 방법으로 획득 가능한 장비",
    text: "통상 장비",
  },
  { value: "gacha", tooltip: "가챠로만 획득 가능한 장비", text: "가챠 장비" },
];

const CharactersHeader = observer(() => {
  const {
    starValues,
    setStarValues,
    elementValues,
    setElementValues,
    gachaValues,
    setGachaValues,
    query,
    setQuery,
  } = useEquipmentsStore();

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

  const handleChangeGachaButtonGroup = (
    e: React.MouseEvent,
    values: string[],
  ) => {
    setGachaValues(values);
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
        label="gacha"
        buttonInfos={gachaButtonsInfos}
        value={gachaValues}
        onChange={handleChangeGachaButtonGroup}
      />
      <SearchBar
        value={query}
        onChange={handleChangeQuery}
        onReset={handleResetQuery}
        placeholder="검색 (장비명, 획득처, 장비설명 등)"
      />
    </div>
  );
});

export default CharactersHeader;
