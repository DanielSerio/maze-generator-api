import { Canvas, createCanvas, CanvasRenderingContext2D } from "canvas";
import { MazeCellValue } from "../utils/create-blank.maze";
import { createSolvableMaze } from "../utils/create-solvable-maze";
import { Point } from "../utils/place-exits";
import { Colors } from "./colors";

export abstract class MazeCanvas {
  public colors: Colors = new Colors()
  public canvas: Canvas
  public ctx: CanvasRenderingContext2D
  public maze!: MazeCellValue[][]
  public path!: Point[]

  constructor(public rows: number, public cols: number, public cellSize: number) {
    this.canvas = createCanvas(this.cols * this.cellSize,this.rows * this.cellSize)
    this.ctx = this.canvas.getContext('2d')
    this.recreateMaze()
  }

  public recreateMaze = () => {
    try {
      const [maze, path] = createSolvableMaze(this.rows, this.cols)
      this.maze = maze
      this.path = path
    } catch (e) {
      const [maze, path] = createSolvableMaze(this.rows, this.cols)
      this.maze = maze
      this.path = path
    }
  }

  public render = (solved?: true): void => {}

  public get imgSrc(): string {
    this.render()
    return this.canvas.toDataURL()
  }

  public get solvedImgSrc(): string {
    this.render(true)
    return this.canvas.toDataURL()
  }

  protected save = (cb: () => void) => {
    this.ctx.save()
    cb()
    this.ctx.restore()
  }

  protected drawPath = (cb: () => void) => {
    this.ctx.beginPath()
    cb()
    this.ctx.closePath()
  }

  protected clear = () => {
    this.save(() => {
      this.ctx.translate(0, 0)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    })
  }
}