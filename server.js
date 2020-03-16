require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.json());




app.get('*', (req, res)=>
    res.sendFile('./dist/personalSite/index.html', {root: __dirname + "/"})
);



app.listen(port, () => console.log(`Listening on port ${port}!`))