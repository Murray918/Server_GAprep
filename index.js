import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const router = require('./router').Routes

const app = express()
const port = process.env.PORT || '8080'


//use morgan for logging Cors for cross origin Express for server and Routes for routing
app.use(cors())
app.use(express())
app.use(morgan('dev'))
router(app)

//initiate the server

app.listen(port, () => {
    console.log(`Congrats!! Server listening on port ${port}`)
    // console.log(server.address())
})