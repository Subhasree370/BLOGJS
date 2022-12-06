const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/view-blog',(req, res) =>{
    res.send('<h1>All blog</h1>');
});



module.exports = router;

