const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
app.use('src', express.static(__dirname + 'publicc/src'))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

const PORT = 3000;
app.listen(PORT ,()=>console.log(`port starts on :  http://localhost:${PORT}`))
