const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bbs",
});

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/list", (req, res) => {
  const sqlQuery =
    "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM BOARD;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.post("/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  console.log(title, content);

  const sqlQuery =
  "insert into BOARD(BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) values(?, ?, 'artistJay');";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.post("/update", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery = `UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ?, UPDATER_ID) VALUES (?,? ,artistJay);`;
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send(result);
  });
});
