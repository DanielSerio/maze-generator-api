import { MazeCellValue } from "../utils/create-blank.maze";
import { Point } from "../utils/place-exits";
import { MazeCanvas } from "./maze-canvas";

export class Maze extends MazeCanvas {
  constructor(rows: number = 31, cols: number = 31, cellSize: number = 20) {
    super(rows, cols, cellSize)
  }

  private cellInPath = (cell: Point): boolean => {
    return this.path.findIndex((p: Point) => p[0] === cell[0] && p[1] === cell[1]) > -1
  }

  public override render = (solved?: true) => {
    const renderMaze = () => {
      this.maze.forEach((row: MazeCellValue[], y: number) => {
        row.forEach((val: MazeCellValue, x: number) => {
          this.save(() => {
            this.ctx.translate(x * this.cellSize, y * this.cellSize)
            this.drawPath(() => {
              this.ctx.fillStyle = this.colors.black
              if (solved && this.cellInPath([x, y])) {
                this.ctx.fillStyle = this.colors.green
                const m: number = 1
                const s: number = this.cellSize - (m * 2)
                this.ctx.fillRect(m,m,s,s)
              } else if ((solved && !this.cellInPath([x, y]) && val === 1) || (!solved && val === 1)) {
                this.ctx.fillStyle = this.colors.black
                this.ctx.fillRect(0, 0, this.cellSize, this.cellSize)
              }
            })
          })
        })
      })
    }
    this.clear()
    renderMaze()
  }
}