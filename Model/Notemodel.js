
let mongoose=require("mongoose")


let Notemodel=mongoose.model("newapi",mongoose.Schema({
    name:String,
    gender:String,
    birth:String,
    current:String,
    visited:{
        type:String,
        enum:['name',"name","name","name","name"]
    }
      
    
}))


module.exports={
    Notemodel
}