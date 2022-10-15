const express = require('express');
const app = express();
const port = 8000;
const router = require('./router');

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);
app.listen(port, () => {
    console.log(`server is running ${port}`)
})