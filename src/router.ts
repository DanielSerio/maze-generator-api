import { Router } from "express";
import { MazeController } from "./controller";
import app from "./middleware";

const router: Router = Router()

router.get('/display', MazeController.displayMaze)
router.get('/', MazeController.getMaze)


app.use(router)

export default app