import React from "react";
import ToggleButtons from "../components/ToggleButtons";
import * as images from "../assets";

const TypeButtonsInfo = [
  { value: "fire", tooltip: "화", image: images.element_fire, text: "" },
  { value: "water", tooltip: "수", image: images.element_water, text: "" },
  { value: "wind", tooltip: "풍", image: images.element_wind, text: "" },
  { value: "thunder", tooltip: "뇌", image: images.element_thunder, text: "" },
  { value: "light", tooltip: "광", image: images.element_light, text: "" },
  { value: "dark", tooltip: "암", image: images.element_dark, text: "" },
];

const Characters = () => {
  return (
    <div>
      <div>
        <h2>CHARACTERS</h2>
      </div>
      <div>
        <ToggleButtons
          buttonGroupLabel="elements"
          buttonInfos={TypeButtonsInfo}
        />
      </div>
    </div>
  );
};

export default Characters;
