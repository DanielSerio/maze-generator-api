import { MazeCellValue } from "./create-blank.maze";
import { Point } from "./place-exits";
import { AStarFinder, Grid } from "pathfinding";

export function solveMaze(maze: MazeCellValue[][], trueStart: Point, trueEnd: Point): Point[]|false {
  const finder = new AStarFinder()
  const grid = new Grid(maze)
  const path: Point[] = finder.findPath(...trueStart, ...trueEnd, grid) as Point[]
  const pointsSame = (p1: Point, p2: Point) => (p1[0] === p2[0] && p1[1] === p2[1])

  if (Boolean(path && path.length) && (!pointsSame(path[0], trueStart) || !pointsSame(path[path.length-1], trueEnd))) return false
  return path
}