//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create GET for all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create GET for a single comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === Number(req.params.id));
    res.json(comment);
});

//Create POST for a comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        body: req.body.body,
        postId: 1
    };
    comments.push(comment);
    res.json(comment);
});

//Create PUT for a comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === Number(req.params.id));
    comment.body = req.body.body;
    res.json(comment);
});

//Create DELETE for a comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === Number(req.params.id));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
});

//Create server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});