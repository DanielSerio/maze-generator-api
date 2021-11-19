import { MazeCellValue } from "./create-blank.maze"
import { createMaze } from "./create-maze"
import { Point } from "./place-exits"
import { solveMaze } from "./solve-maze"

export function createSolvableMaze(rows: number, cols: number): [MazeCellValue[][], Point[]] {
  function* mazeGenerator() {
    for(let i = 0; i < 128; i += 1) {
      yield createMaze(rows, cols)
    }
  }

  const generator = mazeGenerator()
  let current = generator.next()
  let value = current.value

  while(!current.done) {
    if (value && !Boolean(solveMaze(value, [0, 1], [cols - 1, rows - 2]))) {
      current = generator.next()
      value = current.value
    } else break
  }

  return [value as MazeCellValue[][], solveMaze(value as MazeCellValue[][], [0, 1], [cols - 1, rows - 2]) as Point[]]
}