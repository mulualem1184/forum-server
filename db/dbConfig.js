
const mysql2=require('mysql2')
const dbconnection =mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host:"localhost",
//   password:process.env.PASSWORD,
//   connectionLimit:10  
host: process.env.DATABASE_HOST ||'begeifmysnlnhnz9shw9-mysql.services.clever-cloud.com', // Database host
user: process.env.DATABASE_USER ||'u4bz25p8gzp7tudf',                                     // Database user
password: process.env.DATABASE_PASSWORD ||'xRPdhlMDaycUPj2jDSwR',                         // Database password
database: process.env.DATABASE_DATABASE_NAME ||'begeifmysnlnhnz9shw9',                     // Database name
port: process.env.DB_PORT || 3306,     
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