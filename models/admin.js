const db = require("../util/database");

class Blog {
    constructor(id, title, content, author, status) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.status = status;
    };

    save() {
        return db.execute("insert into `blog` (title, content, author, status) values(?, ?, ?, ?)", [this.title, this.content, this.content, this.status]);
    };

    static fetchAll() {
        return db.execute("select * from `blog`");
    };


    static findById(id) {
        return db.execute("select * from `blog` where id = ?", [id]);
    };
};


module.exports = Blog;