import mongoose from 'mongoose'


const fields = 
{
    name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String},
    img:{type:String}
    
}
const bluePrint =  new mongoose.Schema(fields)
const schema3 = mongoose.model('food',bluePrint)
export default schema3