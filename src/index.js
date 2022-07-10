const express = require("express");
const mysqlConnection = require("./database");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(cors());
app.use("/", express.static(path.join(__dirname, "../FRONTEND/")));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/producto", (req, res) => {
    mysqlConnection.query(
        "SELECT p.url_image, c.name as namecate ,p.price,p.name FROM product p join category c on p.category  = c.id where url_image != '' AND url_image IS NOT NULL",
        (err, rows, field) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        }
    );
});
app.get("/producto/:search", (req, res) => {
    const { search } = req.params;
    console.log(search);
    mysqlConnection.query(
        `SELECT p.url_image, c.name as namecate ,p.price,p.name FROM product p join category c on p.category  = c.id where url_image != '' AND url_image IS NOT NULL and p.name like '%${search}%'`,

        (err, rows, field) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        }
    );
});

setInterval(function () {
    mysqlConnection.query("SELECT 1");
}, 5000);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
