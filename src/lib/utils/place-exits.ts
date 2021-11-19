import { MazeCellValue } from "./create-blank.maze";

export type Point = [number, number]

export function placeExits(maze: MazeCellValue[][], exits: [Point, Point]): MazeCellValue[][] {
  exits.forEach((exit: Point) => maze[exit[1]][exit[0]] = 0)
  return maze
}