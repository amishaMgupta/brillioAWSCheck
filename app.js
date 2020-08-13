const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const app = express();
const path = require('path')
// App.use will be execute before any route.
app.use(bodyParser.urlencoded({extended:false}));
app.use('/welcome',express.static(path.join(__dirname,'public')));
// User List
app.use('/api',api)
// to check the errors.
// app.post('/check',(req,res) => {
//     console.log(req.body);
    
//     res.send("Hello post route");
// })

module.exports = app;

