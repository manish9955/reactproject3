const express =require('express');
const mysql = require('mysql');

const app =express();

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"manishdb"

})
/*app.post('/signup',(req,res)=>{
    const sql ="INSERT INTO student (`name`,`phone`,`email`,`msg`)Values(?)";
    const values =[
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.msg,
    ]
db.query(sql,[values],(err,data)=>{
    if(err)return res.json(err);
    return res.json(data);
})    
})*/

app.get("/api",(req,res)=>{
    const sql="SELECT * FROM school";
    db.query(sql,(err,data)=>{
        if(err)return res.json('Error');
        return res.json(data);

    })
    
})
/*app.get("/",(req,res)=>{
    res.send("server is ready")
})*/
const port = process.env.PORT ||5000
app.listen(port,()=>{console.log("listening....")
})