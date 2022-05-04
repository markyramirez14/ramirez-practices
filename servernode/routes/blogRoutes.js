const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/create', blogController.blog_create_get);

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

router.delete('/', blogController.blog_delete_all);

router.post('/search', blogController.blog_search);

module.exports = router;


