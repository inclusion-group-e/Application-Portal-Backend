const express = require('express');
const router = express.Router();
const { Form } = require('../../models');

router.get('/', async (req,res) => {
  res.json(await Form.all());
});

module.exports = router;
