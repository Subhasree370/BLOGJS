
const Blog = require('../models/admin');

exports.adminHome = (req, res, next) => {
    res.send("<h1>admin 1</h1>");
}

exports.getAddBlog = (req, res, next) => {
    res.render('admin/addBlog', { pageTitle: "Add BLogs" });
}

exports.postAddBlog = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const status = 1;

    const blog = new Blog(null, title, content, author, status);

    blog.save()
        .then(() => {
            res.redirect("/admin/view-blog");
        })
        .catch(error => {
            console.log(error);
        });
}

exports.viewBlog = (req, res, next) => {
    Blog.fetchAll()
        .then(resultData => {
            res.render('admin/viewblog', { pageTitle: "View All BLogs", data: resultData[0] });
        })
        .catch(error => {
            console.log(error);
        });
}


exports.viewSingleBlog = (req, res, next) => {
    const blogId = req.params.blogId;
    
    console.log(req.query.affid);
    console.log(req.query.clickid);
    Blog.findById(blogId)
        .then(([resultData]) => {
            res.render('admin/singleblog', { pageTitle: resultData[0].title, blog: resultData[0] });
        })
        .catch(error => {
            console.log(error);
        });
}

