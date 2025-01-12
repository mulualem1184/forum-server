
const mysql2=require('mysql2')
const dbconnection =mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host:"localhost",
//   password:process.env.PASSWORD,
//   connectionLimit:10  
host: process.env.DATABASE_HOST , // Database host
user: process.env.DATABASE_USER ,                                     // Database user
password: process.env.DATABASE_PASSWORD ,                         // Database password
database: process.env.DATABASE_DATABASE_NAME ,                     // Database name
port: process.env.DATABASE_PORT ,     
connectionLimit:3 
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