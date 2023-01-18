
let mongoose=require("mongoose")


let Signupmodel=mongoose.model("Signupdata",mongoose.Schema({
      email:String,
      name:String,
      password:String

    
}))


module.exports={
    Signupmodel
}