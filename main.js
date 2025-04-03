//Richiesta Express
const express = require('express');

const postRouter = require('./router/post.js')

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Server del mio blog con vari post');
})

app.use("/posts", postRouter);

app.listen(port, () =>{
    console.log(`Server port:${port}`);
})