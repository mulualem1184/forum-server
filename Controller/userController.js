// database connection
const dbconnection=require('../db/dbConfig')
const bcrypt=require('bcrypt')
const {StatusCodes}=require('http-status-codes')
const jwt=require('jsonwebtoken')
async function register(req,res){
     const {username, firstname, lastname, email, password}= req.body
    if(!username || !firstname || !lastname|| !email|| !password)
        {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide the required information" });
       }
       try {
        const [user] = await dbconnection.query("select username,userId from users where username=? or email=? ",[username,  email])
        
        if(user.length>0){
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "user is already exist" });
            
        } 
        
        if(password.length<=8){
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password must be at least 8 character" });
        
        } 
        const salt=await bcrypt.genSalt(10)
        const hashPassword= await bcrypt.hash(password,salt)
        await dbconnection.query("INSERT INTO users (username,firstname,lastname,email,password) values (?,?,?,?,?)",[username, firstname, lastname, email, hashPassword])
        return res.status(StatusCodes.CREATED).json({msg:"user created"})
        
       } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error});
        
       }
    
}
async function login(req,res){
    const {email, password}= req.body
    if(!email|| !password)
        {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide your account or password" });
       }
    try {
        const [user] = await dbconnection.query("select username, userId, password from users ")
       
        if (user.length==0)
        {  
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "account with this name not exist", user: user, email:email });
        }
        //  login cheking hashed password
        const ismatchpassword= await bcrypt.compare(password,user[0].password)   
        if (!ismatchpassword)   
            {
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password not match" });  
            }  
        const username=user[0].username
        const userid=user[0].userId;
        const token=jwt.sign({username,userid}, process.env.JWT_SECRET, {expiresIn:"1d"})

         return res.status(StatusCodes.OK).json({msg:"user login successful", token})
        
        // console.log(user[0]?.userId)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
        
    }
    
}
async function checkUser(req,res){
    const username=req.user.username;
    const userid=req.user.userid;
    res.status(StatusCodes.OK).json({msg: "valid user", username, userid})
    
}



module.exports={register,login,checkUser}
