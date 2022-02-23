export type SudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NullableSudokuValue = SudokuValue | null;

export type ButtonInfo = {
  value: string;
  tooltip: string;
  image?: "*.webp";
  text?: string;
};

export type Element =
  | "fire"
  | "water"
  | "wind"
  | "thunder"
  | "light"
  | "dark"
  | "none";
export type Rarity = "1" | "2" | "3" | "4" | "5";
export type FlipType = "fighter" | "sword" | "shooting" | "support" | "special";
export type Class =
  | "attacker"
  | "tanker"
  | "healer"
  | "supporter"
  | "debuffer"
  | "balance";
export type Gender = "male" | "female" | "unidentified";
export type Race =
  | "human"
  | "spirit"
  | "demon"
  | "beast"
  | "machine"
  | "yokai"
  | "dragon"
  | "undead"
  | "water"
  | "plant";

export type CharacterObtain = "normal" | "limited" | "etc";

export type Skill = {
  name: string;
  weight: number;
  text: string[];
  effect: string;
};

export type Leader = {
  name: string;
  text: string[];
};

export type CharacterInfo = {
  prefix: string;
  element: Element;
  rarity: Rarity;
  name: string;
  flipType: FlipType;
  class: Class;
  gender: Gender;
  race: Race[];
  skill: Skill;
  rating: number | "-";
  board2: boolean;
  leader: Leader;
  ability1: string[];
  ability2: string[];
  ability3: string[];
  ability4?: string[];
  ability5?: string[];
  ability6?: string[];
  obtain: CharacterObtain;
};

export type EquipmentInfo = {
  prefix: string;
  element: Element;
  rarity: Rarity;
  name: string;
  hp: { max: number; min: number };
  atk: { max: number; min: number };
  basic: string[];
  max: string[];
  awaken?: string[];
  obtain: string[];
  gacha: "nonGacha" | "gacha";
};

export type TableHeadName = {
  align: "center" | "left" | "inherit" | "right" | "justify" | undefined;
  name: string | string[];
};

export type Images = {
  [key: string]: "*.webp";
};
