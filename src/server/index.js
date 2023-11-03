import express from 'express'
import cors from 'cors'
import * as routes from './routes/index.js'

const PORT = process.env.PORT ?? 3_000
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes.usuarios)
// app.use(routes.cursos)

app.listen(PORT, () => console.log(`SERVER UP in URL: http://localhost:${PORT}`))

export default app
