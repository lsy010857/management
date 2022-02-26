const express=require('express');
const bodyParser =require('body-parser');
const app =express();
const port =process.env.PORT || 5000;
const fs =require('fs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const data=fs.readFileSync('./database.json');
const conf=JSON.parse(data); //환경설정 데이터 파싱
const mysql =require('mysql');

const connection =mysql.createConnection( //연결한 객체를 connection에 담는다.
    {
        host:conf.host,
        user: conf.user,
        password:conf.password,
        port:conf.port,
        database:conf.database

    }
)
connection.connect();

app.get('/api/users',(req,res) =>{  //유저에게 data를 반환한다.
    connection.query(
        "SELECT * FROM USER;",
        (err,rows, fields) => {
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));