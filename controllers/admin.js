
const db = require('../util/database');

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


exports.viewBlog = (req, res, next) => {

    db.execute("select * from `blog`")
        .then(response => {
            console.log(response[0]);
            res.render('admin/viewblog', { pageTitle: "View All BLogs", data: response[0] });
        })
        .catch(error => {
            console.log(error);
        });
    // res.render('admin/viewblog', {pageTitle:"View All BLogs"});
}
