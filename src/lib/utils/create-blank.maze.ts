export type MazeCellValue = 0|1

function levelInput(n: number): number {
  if (n < 5) return 5
  if (n > 59) return 59
  if (n % 2 === 0) n += 1
  return n
}

function fillArray(len: number, chars: MazeCellValue[]): MazeCellValue[] {
  const values: MazeCellValue[] = []
  for (let i = 0; i < len; i += 1) {
    if (chars.length > 1) {
      const charIndex: number = i % 2
      values.push(chars[charIndex])
    } else values.push(chars[0])
  }

  return values
}

export function createBlankMaze(rows: number, cols: number): [MazeCellValue[][], number] {
  rows = levelInput(rows)
  cols = levelInput(cols)
  const maze: MazeCellValue[][] = []

  for (let y = 0; y < rows; y += 1) {
    if (y % 2 === 0) maze.push(fillArray(cols, [1]))
    else maze.push(fillArray(cols, [1,0]))
  }

  const count: number = maze
    .reduce((a,b) => a.concat(b))
    .filter((v: number) => v < 1)
    .length

  return [maze, count]
}