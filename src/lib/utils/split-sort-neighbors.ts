import { Point } from "./place-exits";
import { shuffle } from "./shuffle";

export function splitSortNeighbors(neighbors: Point[], visited: Point[]): Point[] {
  const visitedPoints: Point[] = []
  const unvisitedPoints: Point[] = []

  neighbors.forEach((point: Point) => {
    const pointIndex: number = visited.findIndex((p: Point) => p[0] == point[0] && p[1] == point[1])
    if (pointIndex < 0) unvisitedPoints.push(point)
    else visitedPoints.push(point)
  })


  return shuffle(unvisitedPoints).concat(shuffle(visitedPoints))
}