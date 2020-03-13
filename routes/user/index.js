const express = require('express');
const users = express.Router();
const { User } = require('../../models');

users.get('/', async (req,res) => {
  res.json(await User.all());
});

users.get('/:userId', async (req,res) => {
  res.json(await User.one(req.params.userId));
});

users.post('/', async (req,res) => {
  const email = req.body.email;

  res.json(await User.new(email));
});

users.patch('/:userId', async (req,res) => {
  const password = req.body.password;

  res.json(await User.patch(password));
});

users.delete('/:userId', async (req,res) => {
  res.json(await User.delete(req.params.userId));
});

module.exports = users;
