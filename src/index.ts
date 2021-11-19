import app from './router'
const PORT: number = 4001

app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/display`))