
const mysql2=require('mysql2')
const dbconnection =mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host:"localhost",
//   password:process.env.PASSWORD,
//   connectionLimit:10  
host: process.env.HOST || 'blqbdeyecuthlfs3cb5z-mysql.services.clever-cloud.com', // Database host
user: process.env.USER || 'uodmvxdkr8bxehpt',                                     // Database user
password: process.env.PASSWORD || '9ltDuuNYemiBdUCSfgzX',                         // Database password
database: process.env.DATABASE || 'blqbdeyecuthlfs3cb5z',                         // Database name
port: process.env.DB_PORT || 3306,     
  
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