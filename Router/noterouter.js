
let express=require("express")
const { Notemodel } = require("../Model/Notemodel")

let Userrouter=express.Router()

Userrouter.get("/",async(req,res)=>{
   let data=await Notemodel.find({})

   res.send(data)
})
module.exports={
    Userrouter
}
