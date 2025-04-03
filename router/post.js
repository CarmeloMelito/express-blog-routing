const express = require('express');
const posts = require('../public/app.js');

const router = express.Router();

//index
router.get('/', (req, res) => {
    res.json(posts);
})

//show
router.get('/:slug', (req, res) => {
    let element = req.params.slug;
  
    let currentPost = posts.find(post => element === post.slug);
    //JSON
    res.json(currentPost);
})

router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
})


router.put('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Modifica del post${element}.`);
})


router.patch('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Modifica Post ${element}.`);
})


router.delete('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Elimina Post ${element}.`);
})
module.exports = router;