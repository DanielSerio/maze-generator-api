import app from "./app";
import cors from 'cors'
import helmet from 'helmet'
import { json, urlencoded } from 'express'

app.use(cors())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: false }))

export default app