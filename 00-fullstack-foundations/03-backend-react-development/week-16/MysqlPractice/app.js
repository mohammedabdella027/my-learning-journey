const express = require("express");
const app = express();

const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "myDBuser",
    password: "myDBuser",
    database: "mydb",
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

// =======================
// CREATE TABLES
// =======================

app.get("/install", (req, res) => {

    const Products = `
    CREATE TABLE IF NOT EXISTS Products (
        Product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_url VARCHAR(500),
        product_name VARCHAR(50)
    )`;

    const Product_Description = `
    CREATE TABLE IF NOT EXISTS Product_Description (
        Description_id INT AUTO_INCREMENT PRIMARY KEY,
        Product_id INT NOT NULL,
        Product_brief_description VARCHAR(500),
        Product_description VARCHAR(2000),
        Product_img VARCHAR(2000),
        Product_link VARCHAR(500),

        FOREIGN KEY (Product_id)
        REFERENCES Products(Product_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )`;

    const Product_Price = `
    CREATE TABLE IF NOT EXISTS Product_Price (
        Price_id INT AUTO_INCREMENT PRIMARY KEY,
        Product_id INT NOT NULL,
        Starting_price VARCHAR(50),
        Price_range VARCHAR(500),

        FOREIGN KEY (Product_id)
        REFERENCES Products(Product_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )`;

    const User_Table = `
    CREATE TABLE IF NOT EXISTS User_Table (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        User_name VARCHAR(50),
        User_password VARCHAR(100)
    )`;

    const Orders_Table = `
    CREATE TABLE IF NOT EXISTS Orders_Table (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        user_id INT NOT NULL,

        FOREIGN KEY (product_id)
        REFERENCES Products(Product_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

        FOREIGN KEY (user_id)
        REFERENCES User_Table(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )`;

    connection.query(Products, (err) => {
        if (err) return res.send(err);

        connection.query(Product_Description, (err) => {
            if (err) return res.send(err);

            connection.query(Product_Price, (err) => {
                if (err) return res.send(err);

                connection.query(User_Table, (err) => {
                    if (err) return res.send(err);

                    connection.query(Orders_Table, (err) => {
                        if (err) return res.send(err);

                        res.send("All tables created successfully.");
                    });
                });
            });
        });
    });

});

// =======================
// ADD PRODUCT
// =======================

app.post("/add-product", (req, res) => {

    const product_name = req.body.product_name;
    const product_url = req.body.product_url;

    const sql = `
        INSERT INTO Products
        (product_name, product_url)
        VALUES (?, ?)
    `;

    connection.query(sql, [product_name, product_url], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Error inserting product.");
        }

        res.send(`Product inserted successfully. Product ID: ${result.insertId}`);
    });

});

// =======================
// START SERVER
// =======================

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});