
const mysql2=require('mysql2')
const dbconnection =mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host:"localhost",
//   password:process.env.PASSWORD,
//   connectionLimit:10  
  user: process.env.USER,
  database: process.env.DATABASE,
  host:"blqbdeyecuthlfs3cb5z-mysql.services.clever-cloud.com",
  port:"3306",
  password:process.env.PASSWORD,
  
  connectionLimit:10  
})


dbconnection.execute("select 'test'",(err,result)=>{
    if(err)
    {
        console.log(err.message)
    }
    else{
        console.log(result)
    }
    })
module.exports=dbconnection.promise()