

let jwt=require("jsonwebtoken")

let authorization=(req,res,next)=>{

    let token=req.headers.authorization?.split(" ")[1]
    jwt.verify(token, 'secrete', function(err, decoded) {
        console.log(decoded,"decode")
        if(decoded){
            let UserID=decoded.UserID
            req.body.UserID=UserID
            console.log(UserID)
            console.log(req.body)
            next()
        }
        else{
            res.send("please login again")
        }
      });


}


module.exports={
    authorization
}