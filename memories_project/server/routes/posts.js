import express from 'express';
// nodejs have to specify .js file (in react not nec)
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;