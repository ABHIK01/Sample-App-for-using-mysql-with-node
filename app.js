const express = require("express");
const mysql = require("mysql");

//create coonection

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"crud"
});

//connect

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("mysql connected");


});
const app = express();

//create db

app.get("/create",(req,res) => {
    let sql = "CREATE DATABASE crud";
    db.query(sql,(err,result)=> {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send("Database created");
    });

});

//create table

app.get("/createtable",(req,res) => {
       
 let sql = 'CREATE TABLE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,lastname VARCHAR(30) NOT NULL, firstname VARCHAR(30) NOT NULL, email VARCHAR(50))';   
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post table created");

    });
});

//insert post

app.get("/insertpost1",(req,res) => {
    let sql = 'INSERT INTO MYGUESTS VALUES(13,"Samanta","Abhik","abhiksamanta01@gmail.com")';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send("Data inserted successfully");
    });
});

//select records frm tables

app.get("/fetchrecord",(req,res) => {
    let sql = 'SELECT * FROM MYGUESTS WHERE ID = 13';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send("Data fetched successfully");
    });
});

//update post
app.get("/update",(req,res) => {
    let sql = 'UPDATE MYGUESTS SET EMAIL = "abhiksamanta@hotmail.com" WHERE ID = 13 ';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send("Data updated successfully");

    });

});

//delete post
app.get("/delete",(req,res) => {
    let sql = 'DELETE FROM MYGUESTS WHERE ID = 13';
    db.query(sql,(err,result) => {
        if(err) return err;
        console.log(result);
        res.send("Data deleted successfully");
    });

});

app.listen("3000",() => {
    console.log("Server is running at port no 3000");
});