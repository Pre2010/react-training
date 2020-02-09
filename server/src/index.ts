import express, {Express, Request, Response} from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app: Express = express()
const port: Number = 3000

const corsOps = {
    origin: 'http://localhost:5000',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-type',
        'Accept',
        'Authorization',
        'X-Access-Token',
    ],
    credentials: false,
    preflightContinue: false
}

// Middleware
app.use(cors(corsOps))
app.options('*', cors(corsOps))
app.use(helmet())

// listen on this port
app.listen(port,()=>{
    console.log(`   Server is listening on port: ${port}`)
    console.log(`   Stop server with CTRL+C\n`)
})

// html endpoint. localhost:3000 get request
// Routes
app.get('/test', (req: Request, res: Response) => {
    res.send('This server works!')
})