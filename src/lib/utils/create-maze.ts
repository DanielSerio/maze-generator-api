import { carveMaze } from "./carve-maze";
import { createBlankMaze, MazeCellValue } from "./create-blank.maze";
import { placeExits, Point } from "./place-exits";

export function createMaze(rows: number, cols: number): MazeCellValue[][] {
  let [blankMaze, cellCount] = createBlankMaze(rows, cols)
  let entrance: Point = [1, 1]
  let mazeBase = placeExits(blankMaze, [[0,1], [cols - 1, rows - 2]])
  return carveMaze(mazeBase, cellCount, entrance)
}