const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');

router.get('/', async(req, res) => {
  const rows = await poolQuery('SELECT id, content FROM posts');
  res.send(rows);
});

router.post('/', async(req, res) => {
  const { post } = req.body;
  const { insertId } = await poolQuery('INSERT INTO posts SET ?', {
    content: post
  });
  res.send({ id: insertId, content: post });
});

router.delete('/', async(req, res) => {
  const { id } = req.query;
  await poolQuery('DELETE FROM posts WHERE id = ?', id);
  res.send({ success: true });
});

module.exports = router;
