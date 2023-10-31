const conncetion =require("./Connection");
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

app.get('/employee',(req,res)=>{
    conncetion.query('SELECT * FROM accounts',(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})

app.get('/employee/:username',(req,res)=>{
    conncetion.query('SELECT * FROM accounts where UserName=?',[req.params.username],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})

app.delete('/employee/:username',(req,res)=>{
    conncetion.query('DELETE FROM accounts where UserName=?',[req.params.username],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})

app.post('/employee',(req,res)=>{
    var emp=req.body;
    var empDATA=[emp.UserName,emp.FirstName,emp.LastName,emp.Email,emp.UserPassword]
    conncetion.query('insert into accounts values(?) ',[empDATA],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})
app.patch('/employee/:username',(req,res)=>{
    var emp=req.body;
    conncetion.query("UPDATE accounts SET ? WHERE UserName=?",[emp,req.params.username],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})


app.listen(3000,()=>{
    console.log('express server is running on Port 3000');
})