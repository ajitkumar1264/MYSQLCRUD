const mysql=require('mysql2');

var mysqlConnection=new mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Hrdk1264@',
    database:'javascript'
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