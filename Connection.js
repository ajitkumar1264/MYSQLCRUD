const mysql=require('mysql2');

var mysqlConnection=new mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'_____',
    database:'_________'
})
var Connection=mysqlConnection.connect((err)=>{
    if(err){
        console.log(err.message+"error in DB conncetion")
    }
    else{
        console.log("DB conncected successfully")
    }
})
module.exports = mysqlConnection;
