import { Request, Response } from "express";
import { Maze } from "./lib/models";

function getDefaultMaze(req: Request, res: Response): void {
  const { path, maze, imgSrc, solvedImgSrc } = new Maze()
  res.status(200).json({
    maze,
    path,
    imgSrc,
    solvedImgSrc
  })
}

function getMaze(req: Request, res: Response) {
  if (req.query.cellSize || req.query.rows || req.query.cols) return getCustomMaze(req, res)
  return getDefaultMaze(req, res)
}

function getCustomMaze(req: Request, res: Response): void {
  let { rows, cols, cellSize } = req.query as any
  if ((rows && isNaN(+(rows as string))) || !rows) rows = 31
  if ((cols && isNaN(+(cols as string))) || !cols) cols = 31
  if ((cellSize && isNaN(+(cellSize as string))) || !cellSize) cellSize = 31
  const { path, maze, imgSrc, solvedImgSrc } = new Maze(rows, cols, cellSize)

  res.status(200).json({
    maze,
    path,
    imgSrc,
    solvedImgSrc
  })
}

function displayMaze(req: Request, res: Response) {
  if (req.query.cellSize || req.query.rows || req.query.cols) return displayCustomMaze(req, res)
  return displayDefaultMaze(req, res)
}

function displayCustomMaze(req: Request, res: Response): void {
  let { rows, cols, cellSize } = req.query as any
  if ((rows && isNaN(+(rows as string))) || !rows) rows = 31
  if ((cols && isNaN(+(cols as string))) || !cols) cols = 31
  if ((cellSize && isNaN(+(cellSize as string))) || !cellSize) cellSize = 31
  const { imgSrc, solvedImgSrc } = new Maze(rows, cols, cellSize)

  res.status(200).render('display', { imgSrc, solvedImgSrc })
}


function displayDefaultMaze(req: Request, res: Response): void {
  const { imgSrc, solvedImgSrc } = new Maze()
  res.status(200).render('display', { imgSrc, solvedImgSrc })
}

export const MazeController = {
 getMaze,
 displayMaze
}

