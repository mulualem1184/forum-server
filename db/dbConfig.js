
const mysql2=require('mysql2')
const dbconnection =mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host:"localhost",
//   password:process.env.PASSWORD,
//   connectionLimit:10  
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.DB_PORT,
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