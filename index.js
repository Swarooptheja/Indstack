
let express=require("express")
const { connecting } = require("./config/connection")
// const { connection } = require("mongoose")
const { Usermodel } = require("./Model/Usermodel")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let cors=require("cors")
const { Userrouter } = require("./Router/noterouter");
const { authorization } = require("./authentification");
const { Signupmodel } = require("./Model/Signupmodel");
let app=express()


app.use(express.json())
app.use(cors({
    origin:"*"
}))




app.post("/signup",async(req,res)=>{
    let {email,name,password}=req.body
    try{
        bcrypt.hash(password, 10, async function(err, hash) {
            let user=Signupmodel({email,name,password:hash})
            await user.save()
            res.send("signup successfull")
        });

    }
    catch(err){
        console.log(err)
    }
  
})
app.get("./",(req,res)=>{
    res.send("Home page appear")
})


app.post("/login",async(req,res)=>{

    let {email,password}=req.body

    try{
        let main=await Signupmodel.find({email})
        let hash=main[0].password
        if(main.length>0){
            bcrypt.compare(password, hash, async function(err, result) {
                if(result){
                        var token = jwt.sign({ UserID:main[0]._id }, 'secrete',{expiresIn:"1h"});
                        res.send({"msg":"loginsuccess",token:token})
                    }
                    else{
                       res.send("login fail")
                    }
            });
        }
        else{
            res.send("Invalid credentials try again later")
        }
    }

    catch(err){
        console.log(err)
    }
   
   
})
app.use(authorization)

app.get("/oldapi",async(req,res)=>{
    let data=await Usermodel.find({})
    // console.log(data)
    res.send(data)
 })
app.use("/newapi",Userrouter)


app.listen(6900,async()=>{
    await connecting
    console.log("connect successfull")
    console.log("6800 port is running in the server")
})