const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const router = Router();
const Blog = require('../models/blog');
const Comment = require('../models/comments');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads/`));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
});
const upload = multer({ storage: storage });

// Route to add a new blog
router.get('/add-new', (req, res) => {
    return res.render('addBlog', {
        user: req.user,
    });
});

// Route to create a new blog
router.post('/', upload.single('coverImage'), async (req, res) => {
    const { title, body } = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`,
    });
    return res.redirect(`/blog/${blog._id}`);
});

// Route to get a specific blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('createdBy', 'fullName profileImageURL');
        const comments = await Comment.find({ blogId: req.params.id }).populate('createdBy', 'fullName profileImageURL');

        if (!blog) return res.status(404).send('Blog not found');

        return res.render('blog', {
            user: req.user,
            blog,
            comments,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

// Route to create a comment
router.post('/comment/:blogId', async (req, res) => {
    await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`);
});

module.exports = router;
