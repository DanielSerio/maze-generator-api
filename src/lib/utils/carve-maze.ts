import { MazeCellValue } from "./create-blank.maze";
import { Point } from "./place-exits";
import { splitSortNeighbors } from "./split-sort-neighbors";



export function carveMaze(maze: MazeCellValue[][], totalCells: number, entrance: Point): MazeCellValue[][] {
  function getNeighborPoints(point: Point): Point[] {
    const origins: Point[] = [
      [point[0], point[1] - 2],
      [point[0] + 2, point[1]],
      [point[0], point[1] + 2],
      [point[0] - 2, point[1]],
    ]

    const points: Point[] = []

    for (const o of origins) {
      if (maze[o[1]] && maze[o[1]][o[0]] !== undefined) points.push(o)
    }

    return points
  }

  function breakWall(p1: Point, p2: Point): void {
    if (p1[0] > p2[0]) maze[p1[1]][p1[0] - 1] = 0
    if (p1[0] < p2[0]) maze[p1[1]][p1[0] + 1] = 0
    if (p1[1] > p2[1]) maze[p1[1] - 1][p1[0]] = 0
    if (p1[1] < p2[1]) maze[p1[1] + 1][p1[0]] = 0
  }

  function carve(): void {
    if (o.visited.length < totalCells) {
      const neighbors = splitSortNeighbors(getNeighborPoints(o.current), o.visited)
      const picked = neighbors[0]
      const pickedVisitedIndex: number = o.visited.findIndex((v: Point) => v[0] === picked[0] && v[1] === picked[1])

      if (pickedVisitedIndex < 0) {
        o.visited.push(picked)
        breakWall(o.current, picked)
      }
      o.current = picked
      carve()
    }
  }
  let o = {
    current: entrance,
    visited: [entrance]
  }
  carve()

  return maze
}