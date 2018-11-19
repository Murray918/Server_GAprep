const express =  require('express'),
      morgan = require('morgan'),
      cors = require('morgan'),
      Routes = require('routes')

const app = express()
const port = process.env.PORT || 8088


//use morgan for logging Cors for cross origin Express for server and Routes for routing
app.use(cors())
app.use(express())
app.use(morgan('dev'))
Routes(app)

//initiate the server
app.listen(port, () => {
    console.log(`Congrats!! Server listening on port ${port}`)
})