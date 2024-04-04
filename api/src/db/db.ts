import mysql from "mysql2";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
};

const db = mysql.createConnection(dbConfig);

db.connect((error) => {
  if (error) {
    console.log("Error connencting to DB", error)
  } else {
    console.log("Connected to DB")
  }
})

export default db;