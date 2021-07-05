const ipsum = require('./ipsumGenerator.js');
const fs = require("fs");

const express = require("express");
const querystring = require("querystring");
const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let file = fs.readFileSync(__dirname + "/../public/index.html", {encoding: "utf8"});

    res.write(file);
    res.end();
});

router.post('/', (req, res) => {
    req.on("data", function(data) {
        let query = data.toString();
        let paragraphs = querystring.parse(query).paragraphs;
        let ipsumText = ipsum.generateParagraphs(paragraphs);

        let file = fs.readFileSync(__dirname + "/../public/index.html", {encoding: "utf8"});

        file = file.replace("<div class=\"result-text\"></div>", ipsumText);

        res.setHeader('Content-Type', 'text-html');

        res.write(file);

        res.end();
    });
});

module.exports = router;