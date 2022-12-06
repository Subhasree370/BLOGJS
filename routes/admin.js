const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.send("<h1>admin 1</h1>");
});
router.get('/add-blog',(req, res, next) => {
    res.send("<h1>add-blog</h1><form action='/admin/add-blog' method='POST'><input type='text' name='blogtitle'><button type='submit'>Add Blog</button></form>");
});

router.post('/add-blog',(req, res, next) => {
    console.log(req.body.blogtitle);
    res.redirect("/admin");
});
module.exports = router;