// const express= require('express')
// const mysql= require('mysql')
// const app= express();
// //const db=mysql.createConnection
// app.use(express.json())
// app.get('/login/query', (req, res)=>{
//   const {search,view}=req.query;
// console.log(search ,view);
// res.status(200).send("ok")
// })
// app.listen(5050,()=>{
//   console.log("Listening...");
// })
const express = require('express');
const app = express();
app.use(express.static('./just.html'))
app.use(express.json());
app.use(express.urlencoded( {extended:false} ))
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database:'tweets'
});

connection.connect(error => {
  if (error) {
    console.error('Failed to connect to database:', error);
  } else {
    console.log('Connected to database');
  }
});


app.get('/tweets', (req, res) => {
  // const {id}=req.params;
  const q=`SELECT * FROM tweet`
  connection.query(q, (error, results) => {
    if (error) {
      console.error('Failed to retrieve tweets:', error);
      res.status(500).send('Failed to retrieve tweets');
    } else {
      res.send(results);
    }
  });
});

app.post('/tweets', (req, res) => {
  const content = req.body;

  // connection.query('INSERT INTO tweet(`id`,`desc`) VALUES (?)', [content], (error, results) => {
  //   if (error) {
  //     console.error('Failed to create tweet:', error);
  //     res.status(500).send('Failed to create tweet');
  //   } else {
  //     res.send("Posted");
  //     console.log(results)
  //   }
  //});
  console.log(content)
});

app.listen(5050,(err)=>{
  console.log(err)
})

