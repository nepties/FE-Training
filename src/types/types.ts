export type SudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NullableSudokuValue = SudokuValue | null;

export type ButtonInfo = {
  value: string;
  tooltip: string;
  image?: "*.webp";
  text?: string;
};
