import mongoose from 'mongoose'


const fields = 
{
    email:{type:String,required:true,unique:true},
    password:{type:Number,required:true}
    
}
const bluePrint2 =  new mongoose.Schema(fields)
const schema2 = mongoose.model('Consumer',bluePrint2)
export default schema2