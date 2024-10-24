import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connectDb = async (uri)=>
    {
        try {
            const dbOptions = {dbName:'CRUD'}
            const conn = await mongoose.connect(uri,dbOptions)
            console.log(`Database connection sucessfull!!!`)
        } catch (error) {
            console.error(error)            
        }
    }
export default connectDb