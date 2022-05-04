// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog details'});
        })
        .catch(err => {
            res.status(404).render('404', {title: 'Blog not found'});
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Create a new blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
}


const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json( {redirect: '/blogs' })
        })
        .catch(err => {
            console.log(err);
        })
}

const blog_delete_all = (req, res) => {
    Blog.deleteMany()
        .then(result => {
            res.status(200).json({redirect:"/blogs"})
        })
        .catch(err => {
            res.render("404", {title: "Blogs have been deleted."})
        })
}

const blog_search = async (req, res) => {
    const searchKeyword = req.body.searchKeyword;

    Blog.find({title: searchKeyword})
        .then(result => {
            console.log(result);
            res.render('blogs/search', {blogs: result, title: 'Search Results'});
        })
        .catch(err => {
            res.status(404).render('404', {title: "Blog not found"});
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_delete_all,
    blog_search
}

