const express = require('express');
const validation = require('validation');
const app = express();

app.get('/',(res,req)=> res.send('Goodbye') );

app.get('/god',(res,req)=> res.send('God Hello') );