const express = require('express');
const { adminHome, getAddBlog, postAddBlog } = require('../controllers/admin');
const router = express.Router();

router.get('/', adminHome);
router.get('/add-blog', getAddBlog);
router.post('/add-blog', postAddBlog);

module.exports = router;