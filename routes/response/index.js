const express = require('express');
const responses = express.Router();
const { Response } = require('../../models');

responses.get('/', async (req,res) => {
  res.json(await Response.all());
});

responses.get('/:responseId', async (req,res) => {
  res.json(await Response.one(req.params.responseId));
});

responses.post('/', async (req,res) => {
  const response = req.body.response;
  response["formId"] = req.formId;

  res.json(await Response.new(response));
});

responses.patch('/:responseId', async (req,res) => {
  const data = req.body.response;
  const responseId = req.params.responseId;

  res.json(await Response.patch(responseId, data));
});

module.exports = responses;
