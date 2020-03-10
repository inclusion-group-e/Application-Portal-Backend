const express = require('express');
const router = express.Router();
const { Form } = require('../../models');

router.get('/', async (req,res) => {
  res.json(await Form.all());
});

router.get('/:id', async (req,res) => {
  res.json(await Form.one(req.params.id));
});

router.post('/', async (req,res) => {
  res.json(await Form.create(req.body));
});

module.exports = router;
