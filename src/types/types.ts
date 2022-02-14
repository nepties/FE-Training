export type SudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NullableSudokuValue = SudokuValue | null;

export type ButtonInfo = {
  value: string;
  tooltip: string;
  image?: "*.webp";
  text?: string;
};

export type Element = "fire" | "water" | "wind" | "thunder" | "light" | "dark";
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

export type CharacterInfo = {
  prefix: string;
  element: Element;
  rarity: Rarity;
  name: string;
  flipType: FlipType;
  class: Class;
  gender: Gender;
  race: Race[];
  weight: number;
  rating: number;
  board2: boolean;
};

export type TableHeadNames = {
  align: "center" | "left" | "inherit" | "right" | "justify" | undefined;
  name: string;
};
