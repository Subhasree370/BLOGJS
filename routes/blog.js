const express = require('express');
const router = express.Router();
const path = require('path');

const DUMMYDATA = [
    {
        title: "title1",
        content: 'content1'
    },
    {
        title: "title2",
        content: 'content2'
    },
    {
        title: "title3",
        content: 'content3'
    },
    {
        title: "title4",
        content: 'content4'
    }
];

router.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/view-blog',(req, res) =>{
    // res.send('<h1>All blog</h1>');
    res.render('allblog', {pageTitle:"All BLogs", data: DUMMYDATA});
});




module.exports = router;

