const express = require('express');
const { adminHome, getAddBlog, postAddBlog, viewBlog } = require('../controllers/admin');
const router = express.Router();

router.get('/', adminHome);
router.get('/add-blog', getAddBlog);
router.post('/add-blog', postAddBlog);

router.get('/view-blog', viewBlog);


module.exports = router;