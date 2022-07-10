const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test",
});
setInterval(function () {
    mysqlConnection.query("SELECT 1");
}, 5000);
mysqlConnection.connect((error) => {
    if (error) throw error;
    console.log("Database server running");
});

module.exports = mysqlConnection;
