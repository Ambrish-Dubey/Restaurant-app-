import express from 'express'
import connectDb from './config/db.js'

import web from './routes/web.js'
import user from './routes/userRoute.js'
import schema from './models/model.js'

import dotenv from 'dotenv'
dotenv.config()
connectDb(process.env.MONGO_URI)
const app = express()
const port = process.env.PORT || 8000


app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs' )

app.use('/admin', web)
app.use('/', user)

app.listen(port, ()=>
    {
        console.log(`Server running at:- http://localhost:${port}`)
    } )
