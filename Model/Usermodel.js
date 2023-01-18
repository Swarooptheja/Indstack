
let mongoose=require("mongoose")


let Usermodel=mongoose.model("oldapi",mongoose.Schema({
    id:Number,
  full_name:String,
  age:String,
  gender:String,
  balance:Number,
  native:String,
  relocate_to:String,
  family_members:Number

}))


module.exports={
    Usermodel
}