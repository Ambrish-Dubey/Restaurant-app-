import mongoose from 'mongoose'


const fields = 
{
    name:{type:String,required:true},
    age:{type:Number,required:true},
    location:{type:String,required:true}
}
const bluePrint =  new mongoose.Schema(fields)
const schema = mongoose.model('User',bluePrint)
export default schema