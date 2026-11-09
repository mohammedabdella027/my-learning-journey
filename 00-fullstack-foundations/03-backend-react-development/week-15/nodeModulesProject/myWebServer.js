// Question 9 (6,7,8 with Express)

const http = require("http");
const randomNum = require("./randomNumber");

const server = http.createServer((req, res) => {

    let number = randomNum.randomNumber();

    res.write(number.toString());
    res.end();

});

server.listen(1234);

