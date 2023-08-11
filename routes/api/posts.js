import express from 'express';

const router = express.Router();

import Post from '../../models/Post.js';

router.get('/', (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: 'No Posts found' }));
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(404).json({ nopostfound: 'No Post found' }));
});

router.post('/', (req, res) => {
  Post.create(req.body)
    .then((post) => res.json({ msg: 'Post added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this post', err })
    );
});

router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then((post) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, req.body)
    .then((post) => res.json({ mgs: 'Post entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a post' }));
});

export default router;
