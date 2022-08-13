const express = require('express');

const path= require('path');

const app = express();


app.use(express.static('/dist/tour-of-heroes-ngapp'));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'dist/tour-of-heroes-ngapp/src/index.html'));

});

app.listen(process.env.PORT || 8080)