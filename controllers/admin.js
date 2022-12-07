exports.adminHome = (req, res, next) => {
    res.send("<h1>admin 1</h1>");
}

exports.getAddBlog = (req, res, next) => {
    res.send("<h1>add-blog</h1><form action='/admin/add-blog' method='POST'><input type='text' name='blogtitle'><button type='submit'>Add Blog</button></form>");
}

exports.postAddBlog = (req, res, next) => {
    console.log(req.body.blogtitle);
    res.redirect("/admin");
}