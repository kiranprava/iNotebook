var jwt = require('jsonwebtoken');
const JWT_SECRET='Harryisagoodboy';

const fetchuser=(req, res, next)=>{
    //Get user from jwt token and add id to req object
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
   try{ const string =jwt.verify(token,JWT_SECRET)
    req.user=string.user;
    next();
}
catch(error){
    res.status(401).send({error: "Please authenticate using a valid token"})
}
}
module.exports=fetchuser;