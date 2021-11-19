import express, { Application } from "express";
import cons from 'consolidate'

const app: Application = express()

app.set('views', __dirname + '/views');
app.engine('html', cons.mustache);
app.set('view engine', 'html');

export default app