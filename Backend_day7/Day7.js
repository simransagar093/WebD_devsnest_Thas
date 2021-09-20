const express = require("express");
const app = express();

const slash = (req, res) => {
      res.send("HELLO EVERYONE");
} ;

app.get('/products', (req,res) => {
    req.query = {
        limit: 30,
        q: "something"
    }
    res.send(req.query.q);
})

app.get('/ab?cd', (req,res) => {
    res.send('abcd');
})
app.listen(5000);